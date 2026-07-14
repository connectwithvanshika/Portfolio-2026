import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-container">
        <a href="#" className="logo" aria-label="Vanshika Yadav - Home">
          VANSHIKA<span>.</span>
        </a>

        <div className="nav-right">
          <div className="nav-links">
            <a href="#about" id="nav-about">About</a>
            <a href="#experience" id="nav-experience">Experience</a>
            <a href="#projects" id="nav-projects">Projects</a>
            <a href="#contact" id="nav-contact">Contact</a>
          </div>

          <button
            id="theme-toggle-btn"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
