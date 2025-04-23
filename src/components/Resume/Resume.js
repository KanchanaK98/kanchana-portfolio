import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-header">
          <div className="resume-summary">
            <h3>Summary</h3>
            <div className="summary-card">
              <h4>Kanchana Kariyawasam</h4>
              <p>A dedicated, passionate, extraordinary, and hardworking undergraduate who is willing to learn new technologies with good communication skills</p>
              <ul>
                <li>Thotawala Watta, Sandarawala, Baddegama, Sri Lanka</li>
                <li>(+94) 71 180 47 68</li>
                <li>kanchanakariyawasam98@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-tabs">
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
        
        <div className="resume-content">
          {activeTab === 'education' ? (
            <div className="education-content">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">
                  <span>2020 - 2024</span>
                </div>
                <div className="timeline-content">
                  <h3>Bachelor of Science (Hons) in Information Technology</h3>
                  <h4>University of Moratuwa, Sri Lanka</h4>
                  <p><strong>CGPA - 3.73 (First Class)</strong></p>
                  <ul>
                    <li>L1S1: 3.94 - Dean's List</li>
                    <li>L1S2: 3.87 - Dean's List</li>
                    <li>L2S1: 4.07 - Dean's List</li>
                    <li>L2S2: 3.83 - Dean's List</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">
                  <span>2011 - 2017</span>
                </div>
                <div className="timeline-content">
                  <h3>Student</h3>
                  <h4>Mahinda College, Galle, Sri Lanka</h4>
                  <ul>
                    <li>G.C.E Advanced Level Examination 2018</li>
                    <li>Combined Mathematics - A || Chemistry - A || Physics - B</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">
                  <span>2004 - 2011</span>
                </div>
                <div className="timeline-content">
                  <h3>Student</h3>
                  <h4>Christ Church Boys' College, Baddegama, Sri Lanka</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="projects-content">
              <div className="project-item">
                <h3>EverSync - Authenticity meets Blockchain (Codeathon - @Geveo Australasia (Pvt) Ltd)</h3>
                <h4>Web 3.O project for checking authenticity and ownership transferring of luxuries products</h4>
                <p><em>~Based on XRPL Hooks, NFT, Web 3.O Authentication, Blockchain concepts</em></p>
              </div>
              
              <div className="project-item">
                <h3>PEMS (@Geveo Australasia)</h3>
                <h4>The Parking Enterprise Management System (PEMS) is a comprehensive system created by Duncan Solutions</h4>
                <p><em>~Based on ReactJS, Cosmos DB, .Net 6 and Azure Services</em></p>
              </div>
              
              <div className="project-item">
                <h3>Apex Salary Packaging Project (@Geveo Australasia)</h3>
                <h4>Apex Salary Packaging is a comprehensive approach created to simplify and facilitate salary packaging for employees.</h4>
                <p><em>~Based on VueJS, Flutter, .Net 6, SQL and Azure Services</em></p>
              </div>
              
              <div className="project-item">
                <h3>Automated Flowchart Comparison and Grading System - Final Year Research Project</h3>
                <ul>
                  <li>Developed an automated system to compare and grade flowcharts based on predefined criteria</li>
                  <li>Implemented Optical Character Recognition (OCR) to extract textual information from flowchart images</li>
                  <li>Designed an algorithm to analyze structural and logical similarities between flowcharts</li>
                </ul>
              </div>
              
              <div className="project-item">
                <h3>HRMS MoraSpirit</h3>
                <h4>Web Application for handling HR-related activities & maintaining information of members</h4>
                <p><em>~Based on Laravel, MySQL Technologies</em></p>
              </div>
              
              <div className="project-item">
                <h3>MSP Web MoraSpirit</h3>
                <h4>Web Application for university sports. (Link)</h4>
                <p><em>~Based on HTML, CSS, JS, PHP, MySQL Technologies</em></p>
              </div>
              
              <div className="project-item">
                <h3>Human Resources and Assets Management System</h3>
                <h4>Level 02 Industry-based Software Project for DirectFN Company</h4>
                <p><em>~Based on MERN Stack</em></p>
              </div>
              
              <div className="project-item">
                <h3>Quiz Web Application for Children</h3>
                <h4>Level 02 Web Technologies Module Assignment</h4>
                <p><em>~Based on MERN Stack</em></p>
              </div>
              
              <div className="project-item">
                <h3>Informational Static Site for Decode Coding Competition</h3>
                <h4>For ACM Student Chapter of University of Moratuwa</h4>
                <p><em>~Based on ReactJS</em></p>
              </div>
              
              <div className="project-item">
                <h3>Automated Mushroom Cultivation System</h3>
                <h4>Level 01 Hardware Project</h4>
                <p><em>~Based on C Programming Language, Atmega32 Microcontrollers and Sensors</em></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume; 