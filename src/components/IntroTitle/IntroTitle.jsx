import './IntroTitle.css';

/**
 * IntroTitle — handles `idle` and `title-collapse` phases.
 * Click triggers the collapse animation; animationEnd fires setPhase.
 */
export default function IntroTitle({ phase, onClick, onAnimationEnd }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1
          className={`reveal-text${phase === 'title-collapse' ? ' collapsing' : ''}`}
          onClick={phase === 'idle' ? onClick : undefined}
          onAnimationEnd={onAnimationEnd}
        >
          Jonathan Raynes's Portfolio
        </h1>
      </header>
    </div>
  );
}
