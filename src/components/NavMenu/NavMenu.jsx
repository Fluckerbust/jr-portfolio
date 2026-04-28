import './NavMenu.css';

/**
 * NavMenu — sticky global nav rendered as soon as the intro lands.
 * Stays mounted forever (never removed, z-index 25 sits above portal
 * surround z-2 and quasar-scene z-10 during nav transitions).
 */
export default function NavMenu({ currentPage, onNavigate }) {
  const links = [
    { page: 'about',    label: 'About'    },
    { page: 'projects', label: 'Projects' },
    { page: 'contact',  label: 'Contact'  },
  ];

  return (
    <header className="nav-menu">
      <span className="nav-menu-name" onClick={() => onNavigate('hero')}>
        Jonathan Raynes
      </span>
      <nav className="nav-menu-links">
        {links.map(({ page, label }) => (
          <a
            key={page}
            href={`#${page}`}
            className={currentPage === page ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNavigate(page); }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
