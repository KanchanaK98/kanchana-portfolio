import React from 'react';
import './About.css';
import profileImg from '../../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about section" style={{ alignItems: 'center' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-img">
            <div className="img-container">
              <div className="img-bg"></div>
              <img src={profileImg} alt="Kanchana Kariyawasam" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Software Engineer & Guitarist</h3>
            
            <p>
            A Software Engineer at Geveo Australasia (PVT) Ltd and pursued my degree as a <strong>first class holder from the Faculty of Information Technology, University of Moratuwa, Sri Lanka.</strong> I have hands-on experience in web application development, mobile application development, and programming. Particularly, I am very excited to explore the fields of Artificial Intelligence and Machine Learning because of the transformational impact they have had on the technological world.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Birthday:</span>
                <span className="info-value">08 September 1998</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">University:</span>
                <span className="info-value">University of Moratuwa</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">School:</span>
                <span className="info-value">Mahinda College, Galle</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Phone:</span>
                <span className="info-value">+(94) 71 180 47 68</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Address:</span>
                <span className="info-value">Thotawala Watta, Sandarawala, Baddegama, Sri Lanka</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Age:</span>
                <span className="info-value">27</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Education:</span>
                <span className="info-value">B.Sc (Hons) in Information Technology (First Class)</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">kanchanakariyawasam98@gmail.com</span>
              </div>
              
              <div className="info-item">
                <span className="info-title">Freelance:</span>
                <span className="info-value available">Available</span>
              </div>
            </div>
            
            <p>
              I'm a dedicated, passionate, extraordinary, and hardworking undergraduate who is willing to learn new technologies with good communication skill. I'm also skilled in leading and working with teams, with the expertise I gained from working as,
            </p>
            
            <ul className="experience-list">
              <li>Software Engineer at Geveo Australasia (Pvt) Ltd</li>
              <li>Former Head of Web Pillar at Association for Computing Machinery of the University of Moratuwa</li>
              <li>Former Head of Web and Technology Pillar at MoraSpirit</li>
              <li>Team Leader of Final Year Research Project</li>
              <li>Member of School U13 & U15 Cricket Team</li>
              <li>Member of Classical Music Society, University of Moratuwa</li>
            </ul>
            
            <p>
              I am a quick thinker and an even quicker learner, and I'm always open to learning new skills and gaining new experiences.
            </p>
            
            <div className="about-buttons">
              <a href="#contact" className="btn">Hire Me</a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="skills-title">My Skills</h3>
          
          <div className="skills-container">
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">HTML</span>
                <span className="skill-percentage">96%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '96%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">CSS</span>
                <span className="skill-percentage">96%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '96%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">PHP</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">C</span>
                <span className="skill-percentage">94%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '94%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">C#</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Java</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">ReactJS</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Python</span>
                <span className="skill-percentage">60%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">MongoDB</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">.Net</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Vue</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;