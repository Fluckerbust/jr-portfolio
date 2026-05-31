import { useState } from 'react';
import './NavMenu.css';

/**
 * NavMenu — sticky global nav rendered as soon as the intro lands.
 * Stays mounted forever (never removed, z-index 25 sits above portal
 * surround z-2 and quasar-scene z-10 during nav transitions).
 */
export default function NavMenu({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { page: 'about',    label: 'About'    },
    { page: 'projects', label: 'Projects' },
    { page: 'contact',  label: 'Contact'  },
  ];

  function handleNavClick(page) {
    onNavigate(page);
    setMobileOpen(false);
  }

  return (
    <header className="nav-menu">
      <span className="nav-menu-name" onClick={() => { onNavigate('hero'); setMobileOpen(false); }}>
        Jonathan Raynes
      </span>

      <button
        className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu-links${mobileOpen ? ' open' : ''}`}>
        {links.map(({ page, label }) => (
          <a
            key={page}
            href={`#${page}`}
            className={currentPage === page ? 'active' : ''}
            onClick={e => { e.preventDefault(); handleNavClick(page); }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
