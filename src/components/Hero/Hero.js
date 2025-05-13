import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';
import heroBg from '../../assets/images/hero-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Guitarist'];
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  const tick = useCallback(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(erasingDelay);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(newTextDelay);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(typingDelay);
    }
  }, [isDeleting, loopNum, text, roles, erasingDelay, newTextDelay, typingDelay]);

  useEffect(() => {
    // Set hero background image using CSS variable
    document.documentElement.style.setProperty('--hero-bg', `url(${heroBg})`);
    
    const ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [tick, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="greeting">ආයුබෝවන් !</h1>
            <h2 className="name">Kanchana Kariyawasam</h2>
            <div className="dynamic-text">
              <span className="static-text">I'm a </span>
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