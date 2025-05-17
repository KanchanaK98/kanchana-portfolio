import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBg from '../../assets/images/hero-bg.jpg';

// Move constants outside component to prevent recreation on each render
const roles = [
  'Software Engineer',
  'Web Developer',
  'Mobile App Developer',
  'Guitarist'
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Set hero background image using CSS variable
    document.documentElement.style.setProperty('--hero-bg', `url(${heroBg})`);
    
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      
      setText(prevText => {
        const updatedText = isDeleting
          ? fullText.substring(0, prevText.length - 1)
          : fullText.substring(0, prevText.length + 1);

        if (!isDeleting && updatedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(prevLoop => prevLoop + 1);
        }

        return updatedText;
      });
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="greeting">ආයුබෝවන් !</h1>
            <h2 className="name">Kanchana Kariyawasam</h2>
            <div className="dynamic-text">
              <span className="typing">{text}</span>
              <span className="cursor">|</span>
            </div>
            <div className="hero-btns">
              <a href="#about" className="btn">About Me</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 