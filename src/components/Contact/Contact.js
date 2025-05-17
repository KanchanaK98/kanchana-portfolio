import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

// Use environment variables for EmailJS configuration
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing again
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError('');
      
      // Check if EmailJS is properly configured
      if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        console.error('EmailJS is not fully configured. Please check your environment variables.');
        setSubmitError('EmailJS is not fully configured. Please check your environment variables.');
        setIsSubmitting(false);
        return;
      }
      
      // Use the sendForm method for better compatibility
      emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_USER_ID
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true);
          setIsSubmitting(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        }, (error) => {
          console.error('Email sending failed:', error.text);
          setSubmitError('Failed to send email. Please check the console for details and make sure EmailJS is configured properly.');
          setIsSubmitting(false);
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="contact section" style={{ alignItems: 'center' }}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container" style={{ alignItems: 'center' }}>
          <div className="contact-info">
            <div className="info-item">
              <h3>Location:</h3>
              <p>Thotawala Watta, Sandarawala, Baddegama, Sri Lanka.</p>
            </div>
            
            <div className="info-item">
              <h3>Email:</h3>
              <p><a href="mailto:kanchanakariyawasam98@gmail.com">kanchanakariyawasam98@gmail.com</a></p>
            </div>
            
            <div className="info-item">
              <h3>Call:</h3>
              <p><a href="tel:+94711804768">+(94) 71 180 47 68</a></p>
            </div>
            
            <div className="social-links">
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
          </div>
          
          <div className="contact-form" style={{ alignItems: 'center' }}>
            {formSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? 'error' : ''}
                  />
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows="7" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                
                {submitError && <div className="error-message form-error">{submitError}</div>}
                
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 