import './IdleOrb.css';

/**
 * IdleOrb — the glowing orb that sits at the bottom of the home page.
 * During `orb-rise` phase it animates to center and calls onRiseEnd.
 */
export default function IdleOrb({ phase, onRiseEnd }) {
  return (
    <div
      className={`idle-orb${phase === 'orb-rise' ? ' orb-rising' : ''}`}
      onAnimationEnd={e => {
        if (e.animationName === 'orb-rise-anim') onRiseEnd();
      }}
    >
      <div className="idle-orb-inner" />
    </div>
  );
}
