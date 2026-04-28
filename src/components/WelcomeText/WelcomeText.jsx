import './WelcomeText.css';

/**
 * WelcomeText — handles `welcome-in` and `welcome-collapse` phases.
 * The same onAnimationEnd handler distinguishes between the two
 * via e.animationName ('welcome-fade-in' vs 'welcome-squish').
 */
export default function WelcomeText({ phase, onAnimationEnd }) {
  const classes = ['welcome-text'];
  if (phase === 'welcome-in')       classes.push('welcome-fading-in');
  if (phase === 'welcome-collapse') classes.push('collapsing');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={classes.join(' ')} onAnimationEnd={onAnimationEnd}>
          Welcome
        </h1>
      </header>
    </div>
  );
}
