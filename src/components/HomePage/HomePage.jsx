import './HomePage.css';
import {
  FaLeaf, FaEye, FaVideo, FaRocket, FaGlobe, FaRobot,
  FaYoutube, FaChartLine, FaMusic, FaFilm, FaBookOpen,
  FaGamepad, FaDice, FaCubes, FaStar,
} from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiJavascript, SiHtml5, SiReact } from 'react-icons/si';

/* ── Page components ────────────────────────────────────────── */

function HeroContent() {
  return (
    <section className="ch-hero">
      <h1 className="hero-title">Jonathan Raynes</h1>
      <p className="hero-subtitle">Front-End Developer</p>
      <div className="hero-links">
        <a href="mailto:JonRaynes10@gmail.com" className="hero-link">Email</a>
        <a href="https://github.com/Fluckerbust" target="_blank" rel="noreferrer" className="hero-link">GitHub</a>
        <a href="https://www.linkedin.com/in/jonraynes-94136024" target="_blank" rel="noreferrer" className="hero-link">LinkedIn</a>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <section className="ch-section">
      <h2 className="section-heading">About</h2>

      <div className="about-card pop-card" style={{ '--pi': 1 }}>
        <p className="about-body">
          I'm a front-end developer with <strong>18 years of technical support</strong> experience
          and <strong>10+ years of professional HTML/CSS development</strong>. For the past several years
          I've been building reactive interfaces with <strong>React, TypeScript, and Node.js</strong>,
          while maintaining a strong foundation in UI/UX design, animation, and Agile workflows.
        </p>
        <p className="about-body">
          Currently at <strong>HPE (via KForce)</strong> since October 2016, managing and curating the
          HPE Demo Portal — optimizing workflows, driving platform enhancements, and collaborating across
          teams to deliver polished web experiences.
        </p>
      </div>

      <h3 className="sub-heading pop-card" style={{ '--pi': 2 }}>Experience</h3>

      <div className="exp-card pop-card" style={{ '--pi': 3 }}>
        <div className="exp-header">
          <span className="exp-company">HPE (KForce)</span>
          <span className="exp-period">Oct 2016 – Present</span>
        </div>
        <span className="exp-role">Front-End Developer · Fort Collins, CO</span>
        <ul className="exp-list">
          <li>Manage content and curate the HPE Demo Portal</li>
          <li>Optimize workflows and tools, improving platform efficiency</li>
          <li>Web design, development, and platform enhancement collaboration</li>
          <li>Support US time zone and manage events</li>
        </ul>
      </div>

      <div className="exp-card pop-card" style={{ '--pi': 4 }}>
        <div className="exp-header">
          <span className="exp-company">F&amp;W Media</span>
          <span className="exp-period">Nov 2015 – Aug 2016</span>
        </div>
        <span className="exp-role">Email Specialist · Fort Collins, CO</span>
        <ul className="exp-list">
          <li>Scheduled and sent marketing emails using Salesforce / ExactTarget</li>
          <li>Conducted HTML coding classes and maintained email templates</li>
        </ul>
      </div>

      <div className="exp-card pop-card" style={{ '--pi': 5 }}>
        <div className="exp-header">
          <span className="exp-company">Constant Contact</span>
          <span className="exp-period">Oct 2012 – Oct 2015</span>
        </div>
        <span className="exp-role">Tier 2 Technical Support · Fort Collins, CO</span>
        <ul className="exp-list">
          <li>Provided technical support for small-to-large businesses on email marketing</li>
          <li>Troubleshot email and API integration issues; developed HTML templates</li>
        </ul>
      </div>

      <h3 className="sub-heading pop-card" style={{ '--pi': 6 }}>Technical Skills</h3>
      <div className="skills-grid pop-card" style={{ '--pi': 7 }}>
        {[
          { label: 'Front-End', tags: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React', 'React Native', 'Expo', 'Next.js', 'TypeScript'] },
          { label: 'Back-End', tags: ['Node.js', 'Express', 'Python', 'Flask', 'Ruby on Rails', 'JWT', 'REST APIs'] },
          { label: 'Data & Libraries', tags: ['PostgreSQL', 'SQLite', 'OpenCV', 'scikit-learn', 'PapaParse', 'PDFKit'] },
          { label: 'Design & UI', tags: ['CSS Animations', 'Email Templates', 'Responsive Layout', 'Wireframing'] },
        ].map(({ label, tags }) => (
          <div key={label} className="skill-group">
            <span className="skill-label">{label}</span>
            <div className="skill-tags">
              {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Coded Projects ─────────────────────────────────────────── */
const CODED_PROJECTS = [
  {
    title: 'Savvy Lawn',
    Icon: FaLeaf,
    desc: 'Lawn care app in two flavors: a React Native / Expo mobile frontend with file-based routing, and a Next.js 14 admin dashboard backed by a Ruby on Rails 7 REST API with PostgreSQL.',
    tags: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'JWT'],
    thumb: 'web',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Roulette Vision',
    Icon: FaEye,
    desc: 'Webcam computer vision system that detects a roulette ball\'s landing number in real time. Tracks stats in SQLite and streams a live web dashboard.',
    tags: ['Python', 'Flask', 'OpenCV', 'scikit-learn', 'SQLite', 'SCSS'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Video Posting',
    Icon: FaVideo,
    desc: 'React video posting and management interface — original front-end implementation and layout work.',
    tags: ['React 18', 'JavaScript'],
    thumb: 'web',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'HTML & CSS Work',
    Icon: SiHtml5,
    desc: 'Front-end design and client work built entirely by hand — CSS animations, layout experiments, an invoice template, client site designs, and reusable HTML email template samples.',
    tags: ['HTML5', 'CSS3', 'Email Templates', 'Animations'],
    thumb: 'portfolio',
    link: null,
    items: ['CSS Animations', 'Email Templates', 'Invoice Template', 'Zuri Client Design', 'CA Client Projects', 'Dashing Development UI'],
  },
  {
    title: 'JavaScript & Node.js Practice',
    Icon: SiJavascript,
    desc: 'Exercises and small apps covering vanilla JS, API calls, data processing, and a full Express + React feedback tool that parses CSV and exports formatted PDF reports.',
    tags: ['JavaScript', 'Node.js', 'Express', 'React 18', 'PDFKit', 'PapaParse'],
    thumb: 'system',
    link: null,
    items: ['Animal Facts API', 'Credit Card Validator', 'CSV → JSON Converter', 'Number Guessing Game', 'Feedback Processor (PDF)', 'School-Themed JS Classes'],
  },
  {
    title: 'Portfolio Site',
    Icon: SiReact,
    desc: 'This portfolio — cinematic React app with portal/quasar animations, phase-based transitions, sticky nav, and hot-swapped content pages.',
    tags: ['React', 'CSS Animations', 'JavaScript'],
    thumb: 'portfolio',
    link: 'https://github.com/Fluckerbust',
  },
];

/* ── Prompt-Engineered Projects ──────────────────────────────── */
const PE_PROJECTS = [
  {
    title: 'Blender AI Render System',
    Icon: SiBlender,
    desc: 'Generates 3D assets from natural language prompts using a local Ollama AI via MCP. React validation preview lets you inspect assets before final rendering.',
    tags: ['Python', 'Blender 4.5', 'Ollama', 'MCP', 'React', 'Docker'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'MC-BOT',
    Icon: FaCubes,
    desc: 'Multi-agent Minecraft AI bot system with modular personalities, persistent memory, journaling, crafting systems, Twitch chat integration, and a web dashboard.',
    tags: ['Node.js', 'mineflayer', 'WebSocket', 'Docker', 'PostgreSQL', 'Redis'],
    thumb: 'game',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'NovaStar — Space RPG',
    Icon: FaRocket,
    desc: 'Starfield-inspired sci-fi RPG in Unreal Engine 5.3. Modular ship building, dynamic factions, living economy, crew management, and 4-player co-op.',
    tags: ['Unreal Engine 5', 'C++', 'Blueprint', 'GAS'],
    thumb: 'game',
    link: null,
  },
  {
    title: 'Unreal World Generator',
    Icon: FaGlobe,
    desc: 'AI-driven generative game system. React/Three.js frontend with real-time 3D preview and a Python FastAPI backend running a Stable Diffusion asset pipeline.',
    tags: ['React', 'Three.js', 'TypeScript', 'Python', 'FastAPI', 'Stable Diffusion', 'Docker'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Dev Team AI',
    Icon: FaRobot,
    desc: 'Containerized local multi-agent AI coding system. Three Ollama-powered agents (Prompt Splitter, Coder, Validator) with live SSE streaming and downloadable code artifact ZIPs.',
    tags: ['Python', 'FastAPI', 'React', 'Ollama', 'Docker'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Qtube',
    Icon: FaYoutube,
    desc: 'Self-hosted YouTube download manager with a media library, playlists, tags, notes, Chromecast casting, and configurable retention / encoding policies.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'yt-dlp', 'Docker'],
    thumb: 'system',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Cannon',
    Icon: FaChartLine,
    desc: 'Sports betting odds scraper. Headless Playwright crawls BetMGM, FanDuel, DraftKings, bet365, and BetRivers. FastAPI serves the data to a React/TypeScript frontend.',
    tags: ['Python', 'FastAPI', 'Playwright', 'React', 'TypeScript', 'Docker'],
    thumb: 'system',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Sessions',
    Icon: FaMusic,
    desc: 'Synchronized music listening rooms. Users queue tracks from YouTube, Spotify, or SoundCloud and listen together in real-time sync.',
    tags: ['React 18', 'WebSocket', 'react-player'],
    thumb: 'web',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Vidgen',
    Icon: FaFilm,
    desc: 'AI video generation platform built around Open-Sora. Supports text-to-image, text-to-video, image-to-video, and video-to-video with WebSocket progress updates.',
    tags: ['Python', 'FastAPI', 'React', 'Open-Sora', 'CUDA', 'Docker', 'Kubernetes'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Comic Maker',
    Icon: FaBookOpen,
    desc: 'CLI pipeline for generating manga/comic character image datasets with Stable Diffusion for LoRA training — story outliner, prompt gen, panel gen, and variant selection.',
    tags: ['Python', 'Stable Diffusion', 'ComfyUI', 'HuggingFace', 'Pillow'],
    thumb: 'ai',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'GG Shop V1',
    Icon: FaGamepad,
    desc: 'Neon 80s-themed game store UX with sliding door entrance animations, a product wall with overlays, interactive checkout counter, and live chat box.',
    tags: ['React 18', 'react-router-dom', 'CSS'],
    thumb: 'game',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Craps Dealer Trainer',
    Icon: FaDice,
    desc: 'Visual craps table simulator for dealer payout practice. Available as a web app and Android mobile app via Capacitor.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Capacitor', 'Android'],
    thumb: 'mobile',
    link: 'https://github.com/Fluckerbust',
  },
  {
    title: 'Unreal Engine MCP Plugin',
    Icon: SiUnrealengine,
    desc: 'UE5 plugin that exposes the entire editor as an HTTP API. Lets external AI systems control level design, Blueprints, materials, and asset import/export via JSON.',
    tags: ['Unreal Engine 5', 'C++', 'JSON API', 'HTTP'],
    thumb: 'system',
    link: null,
  },
  {
    title: 'Universe Sim',
    Icon: FaStar,
    desc: 'Real-time space physics simulation with gravitational attraction, black holes, planet merging on collision, texture support, zoom, and 3D rotation.',
    tags: ['Python', 'Pygame'],
    thumb: 'game',
    link: 'https://github.com/Fluckerbust',
  },
];

function ProjectCard({ p, i }) {
  return (
    <div
      className={`project-card pop-card${p.link ? ' project-card--linked' : ''}`}
      style={{ '--pi': i + 1 }}
      onClick={() => p.link && window.open(p.link, '_blank', 'noreferrer')}
    >
      <div className={`project-card-thumb project-card-thumb--${p.thumb}`}>
        {p.wip && <span className="wip-badge">WIP</span>}
        {p.Icon && <p.Icon className="project-card-icon" />}
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{p.title}</h3>
        <p className="project-card-desc">{p.desc}</p>
        {p.items && (
          <ul className="project-card-items">
            {p.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        )}
        <div className="project-card-tags">
          {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <section className="ch-section">
      <h2 className="section-heading">Projects</h2>

      <h3 className="projects-category-heading">Coded Projects</h3>
      <div className="project-grid">
        {CODED_PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <h3 className="projects-category-heading projects-category-heading--pe">Prompt Engineered</h3>
      <div className="project-grid">
        {PE_PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="ch-section ch-section--center">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-card pop-card" style={{ '--pi': 1 }}>
        <p className="contact-intro">Open to new opportunities. Feel free to reach out.</p>
        <div className="contact-links">
          <a href="mailto:JonRaynes10@gmail.com" className="contact-link">
            <span className="contact-link-icon">✉</span>
            <span>JonRaynes10@gmail.com</span>
          </a>
          <a href="tel:9706913149" className="contact-link">
            <span className="contact-link-icon">📞</span>
            <span>970-691-3149</span>
          </a>
          <a href="https://github.com/Fluckerbust" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-icon">⌥</span>
            <span>github.com/Fluckerbust</span>
          </a>
          <a href="https://www.linkedin.com/in/jonraynes-94136024" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-icon">in</span>
            <span>linkedin.com/in/jonraynes-94136024</span>
          </a>
        </div>
        <p className="contact-note">References available upon request.</p>
      </div>
    </section>
  );
}

const PAGE_MAP = {
  hero:     HeroContent,
  about:    AboutContent,
  projects: ProjectsContent,
  contact:  ContactContent,
};

/**
 * ContentHolder — hot-swaps page content below the sticky NavMenu.
 * exiting=true: plays the shrink-to-center exit animation, then calls onExitEnd.
 * Changing currentPage forces a remount of the inner div (via key),
 * which triggers the pop-in CSS animation on every page switch.
 */
export default function ContentHolder({ currentPage, exiting = false, onExitEnd }) {
  const PageComponent = PAGE_MAP[currentPage] ?? HeroContent;
  return (
    <div
      className={`content-holder${exiting ? ' content-holder--exiting' : ''}`}
      onAnimationEnd={exiting
        ? (e) => { if (e.animationName === 'holder-shrink') onExitEnd?.(); }
        : undefined}
    >
      {/* key forces unmount+remount -> pop-in animation re-fires */}
      <div className="content-page" key={currentPage}>
        <PageComponent />
      </div>
    </div>
  );
}
