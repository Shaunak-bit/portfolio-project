import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './chatbot.module.css';
import homeStyles from '../pages/home.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hello! I'm your portfolio assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: input }]);
    setInput('');
    // Simulate bot response (replace with real AI integration)
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: "Sorry, I am still learning. Please ask about projects, skills, or experience." }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.chatbotPage}>
      <header className={homeStyles['portfolio-header']}>
        <div className={homeStyles.container}>
          <nav>
            <div className={homeStyles.logo}>Portfolio</div>
            <ul className={homeStyles['nav-links']}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><Link to="/chatbot" className={homeStyles.active}>Chatbot</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.mainContent}>
        <h1>Portfolio <span>Chatbot</span></h1>
        <p>Ask questions about my portfolio, projects, skills, or experience</p>

        <div className={styles.chatContainer}>
          <div className={styles.titleBar}>
            <div className={styles.titleIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={styles.botIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className={styles.titleText}>
              <strong>Portfolio Assistant</strong>
              <div className={styles.subtitle}>Always ready to help</div>
            </div>
            <div className={styles.titleActions}>
              <button className={styles.iconButton} aria-label="Download chat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={styles.actionIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </button>
              <button className={styles.iconButton} aria-label="Delete chat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={styles.actionIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.chatWindow}>
            {messages.map(msg => (
              <div key={msg.id} className={`${styles.message} ${msg.sender === 'bot' ? styles.bot : styles.user}`}>
                <div className={styles.messageText}>{msg.text}</div>
                {msg.sender === 'bot' && <div className={styles.messageTime}>01:13 am</div>}
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <textarea
              placeholder="Type your message here..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.textInput}
              rows={1}
            />
            <button onClick={handleSend} className={styles.sendButton} aria-label="Send message">
              &#9658;
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Portfolio</div>
          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h3>Get In Touch</h3>
            <p>Have a project in mind or want to collaborate?</p>
            <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;
