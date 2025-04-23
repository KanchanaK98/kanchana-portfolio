import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-logo footer-name">Kanchana Kariyawasam</h2>
          <p className="footer-text">Official Website</p>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/kanchana-kariyawasam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/kanchanak98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://stackoverflow.com/users/14951084/kanchana-kariyawasam" target="_blank" rel="noopener noreferrer" aria-label="StackOverflow">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a href="https://kanchanakariyawasam98.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="https://web.facebook.com/kanchana.kariyawasam.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          
          <div className="copyright">
            <p>&copy; Copyright <strong>Kanchana Kariyawasam</strong>. All Rights Reserved</p>
            <p>{currentYear}</p>
          </div>
        </div>
      </div>
      
      <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </footer>
  );
};

export default Footer; 