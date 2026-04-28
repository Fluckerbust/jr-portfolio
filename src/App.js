import { useState, useEffect } from 'react';
import './App.css';

import ColorLayer    from './components/ColorLayer/ColorLayer';
import IntroTitle    from './components/IntroTitle/IntroTitle';
import Portal        from './components/Portal/Portal';
import QuasarScene   from './components/QuasarScene/QuasarScene';
import NavMenu       from './components/NavMenu/NavMenu';
import ContentHolder from './components/HomePage/HomePage';
import IdleOrb       from './components/IdleOrb/IdleOrb';

/*
  INTRO (first run):
    idle -> title-collapse -> portal -> quasar(showWelcome) -> home

  NAV (after launch, menu stays sticky forever):
    home -> [portal -> quasar(no welcome)] -> home(new page)

  hasLaunched: false until first quasar completes.
    When false: QuasarScene shows welcome text, qc-header wireframe
    When true:  NavMenu is always rendered above everything (z-25)
                QuasarScene skips welcome + qc-header (real nav is visible)
*/

export default function App() {
  const [phase, setPhase] = useState('idle');
  const [hasLaunched, setHasLaunched] = useState(false);
  const [currentPage, setCurrentPage] = useState('hero');
  const [nextPage, setNextPage] = useState('hero');

  // Portal holds 1s then fires quasar (exit shrink already consumed ~0.45s)
  useEffect(() => {
    if (phase !== 'portal') return;
    let cancelled = false;
    const t = setTimeout(() => { if (!cancelled) setPhase('quasar'); }, 1500);
    return () => { cancelled = true; clearTimeout(t); };
  }, [phase]);

  // Black cover: only during intro text phases (portal has surround, quasar + home have own bg)
  const showBlack = phase === 'idle' || phase === 'title-collapse';

  function handleTitleAnimEnd(e) {
    if (e.animationName === 'title-squish') setPhase('portal');
  }

  // Nav click: first shrink current content to center, then portal opens
  function handleNavigate(page) {
    if (phase !== 'home' || page === currentPage) return;
    setNextPage(page);
    setPhase('exit');
  }

  // Called when the shrink animation finishes — now open the portal
  function handleExitEnd() {
    setPhase('portal');
  }

  // Quasar done: update page, record launch, return to home
  function handleQuasarDone() {
    setCurrentPage(nextPage);
    if (!hasLaunched) setHasLaunched(true);
    setPhase('home');
  }

  return (
    <>
      <ColorLayer />
      {showBlack && <div className="black-layer" />}

      {/* Sticky nav — present above everything once launched, never removed */}
      {hasLaunched && (
        <NavMenu currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* Intro: white title -> gradient -> collapse */}
      {(phase === 'idle' || phase === 'title-collapse') && (
        <IntroTitle
          phase={phase}
          onClick={() => setPhase('title-collapse')}
          onAnimationEnd={handleTitleAnimEnd}
        />
      )}

      {/* Exit: old content shrinks to center before portal opens */}
      {phase === 'exit' && (
        <ContentHolder
          currentPage={currentPage}
          exiting={true}
          onExitEnd={handleExitEnd}
        />
      )}

      {/* Portal ring — full screen, NavMenu sits above it (z-25 > z-2 surround) */}
      {phase === 'portal' && <Portal />}

      {/* Quasar: showWelcome only on first run; qc-header only when no real nav */}
      {phase === 'quasar' && (
        <QuasarScene
          showWelcome={!hasLaunched}
          onDone={handleQuasarDone}
        />
      )}

      {/* Home: content holder hot-swaps pages; orb decorates hero only */}
      {phase === 'home' && (
        <>
          <ContentHolder currentPage={currentPage} />
          {currentPage === 'hero' && (
            <IdleOrb phase="home" onRiseEnd={() => {}} />
          )}
        </>
      )}
    </>
  );
}
