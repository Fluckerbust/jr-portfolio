import './Portal.css';

/**
 * Portal — renders the portal ball + surround during the `portal` phase.
 * The surround blacks out everything outside the portal circle so only
 * the ring is visible. The ring itself carries gradient color directly
 * (not relying on the color-layer, which is masked out at the center).
 */
export default function Portal() {
  return (
    <>
      {/* Blacks out everything outside the portal ring window */}
      <div className="portal-surround portal-surround--small" />

      <div className="App">
        <header className="App-header">
          <div className="portal portal--ball">
            <div className="portal-center portal-center--glass" />
          </div>
        </header>
      </div>
    </>
  );
}
