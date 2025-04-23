import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../assets/images/profile.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logoImage} alt="Kanchana Logo" className="navbar-logo-img" />
            <a href="#home">Kanchana</a>
          </div>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#resume" 
                  className={activeSection === 'resume' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#services" 
                  className={activeSection === 'services' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-actions">
            <button 
              className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`} 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? (
                <FontAwesomeIcon icon={faSun} className="theme-icon" />
              ) : (
                <FontAwesomeIcon icon={faMoon} className="theme-icon" />
              )}
            </button>
            
            <div className="hamburger" onClick={toggleMenu}>
              <span className={`bar ${isOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 