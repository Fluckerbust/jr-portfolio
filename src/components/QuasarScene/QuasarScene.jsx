import { useEffect } from 'react';
import './QuasarScene.css';

/**
 * QuasarScene — cinematic eruption.
 *
 * showWelcome=true  (intro):  ~10s — ball drop, beam, dust, welcome ascent,
 *                              hero + nav wireframes, project cards
 * showWelcome=false (nav):    ~7s  — ball drop, beam, dust, hero + project
 *                              cards only (real NavMenu already visible)
 */
export default function QuasarScene({ onDone, showWelcome = true }) {
  useEffect(() => {
    const t = setTimeout(onDone, showWelcome ? 10000 : 3150);
    return () => clearTimeout(t);
  }, [onDone, showWelcome]);

  return (
    <div className={`quasar-scene${showWelcome ? '' : ' quasar-scene--fast'}`}>

      <div className="quasar-ball">
        <div className="quasar-ball-inner" />
      </div>

      <div className="quasar-beam" />

      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} className="dust-pixel" style={{ '--i': i }} />
      ))}

      {/* Welcome text — intro only */}
      {showWelcome && (
        <div className="quasar-welcome-wrap">
          <h2 className="quasar-welcome">Welcome</h2>
        </div>
      )}

      {/* Batch 1: hero wireframe */}
      <div className="quasar-component qc-hero">
        <div className="qc-block qc-block-title" />
        <div className="qc-block qc-block-sub" />
      </div>

      {/* Nav wireframe — intro only; real NavMenu already showing on nav transitions */}
      {showWelcome && (
        <div className="qc-header">
          <div className="qc-bar" />
        </div>
      )}

      {/* Batch 2: project card wireframes */}
      <div className="quasar-component qc-cards">
        <div className="qc-card" />
        <div className="qc-card" />
        <div className="qc-card" />
      </div>

    </div>
  );
}
