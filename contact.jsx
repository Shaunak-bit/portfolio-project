import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './contact.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.portfolioHeader}>
        <nav>
          <Link to="/" className={styles.logo}>Portfolio</Link>
          <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className={styles.active}>Contact</Link></li>
            <li><Link to="/resume-builder">Resume Builder</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In <span>Touch</span></h1>
          <p className={styles.subtitle}>Have a project in mind or want to collaborate? Feel free to reach out!</p>

          <div className={styles.contactGrid}>
            <div className={styles.contactForm}>
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                  />
                </div>
                <button type="submit" className={styles.sendButton}>
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Email</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Location</h3>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className={styles.connectSection}>
                <h2>Connect With Me</h2>
                <p>Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>P</span>
              <span className={styles.logoText}>Portfolio</span>
            </div>
            <p>Showcasing my creative work, skills, and professional journey through an interactive portfolio experience.</p>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="mailto:contact@example.com"><FaEnvelope /></a>
            </div>
          </div>

          <div className={styles.footerCenter}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/builder">Resume Builder</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </div>

          <div className={styles.footerRight}>
            <h3>Get In Touch</h3>
            <p>Have a project in mind or want to collaborate?</p>
            <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}