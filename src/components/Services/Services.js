import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Software Developer',
      description: 'Mobile App Development (IOS, Android, Hybrid, Native) and Web Application Development',
      icon: 'code'
    },
    {
      id: 2,
      title: 'Resume Creator',
      description: 'Professional CVs/Resumes creation. Capture your Professional details into a Resume',
      icon: 'file-text'
    },
    {
      id: 3,
      title: 'Guitarist',
      description: 'Giving the coolest music on to your need by playing a Guitar',
      icon: 'music'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-desc">
          I am providing best products to below mentioned services. Always ensure Uniqueness, attractiveness and trustworthy service.
        </p>
        
        <div className="services-container">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={`icon-${service.icon}`}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 