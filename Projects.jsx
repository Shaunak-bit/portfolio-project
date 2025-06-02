import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './projects.module.css';
import homeStyles from './home.module.css';

const projectsData = [
  {
    id: 1,
    title: 'Sentiment Analysis Tool',
    description: 'Machine learning application that analyzes text data to determine sentiment and emotional tone.',
    category: 'Machine Learning',
    tags: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Social Media Platform',
    description: 'A social networking platform with real-time messaging, post sharing, and user connections.',
    category: 'Web Development',
    tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Travel Companion App',
    description: 'Mobile app for planning trips, discovering local attractions, and sharing travel experiences.',
    category: 'Mobile Apps',
    tags: ['Flutter', 'Dart', 'Google Maps API'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with product listings, shopping cart, and payment integration.',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and contact information.',
    category: 'UI/UX Design',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Machine Learning'];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles['projects-page']}>
      <header className={homeStyles['portfolio-header']}>
        <div className={homeStyles.container}>
          <nav>
            <div className={homeStyles.logo}>Portfolio</div>
            <ul className={homeStyles['nav-links']}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects" className={homeStyles.active}>Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <h1>My <span>Projects</span></h1>
      <p>Explore my portfolio of work across various domains and technologies</p>

      <div className={styles['search-container']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles['search-icon']}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles['search-input']}
        />
      </div>

      <div className={styles['filter-buttons']}>
        {categories.map(category => (
          <button
            key={category}
            className={filter === category ? styles.active : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles['projects-grid']}>
        {filteredProjects.map(project => (
          <div key={project.id} className={styles['project-card']}>
            <img src={project.imageUrl} alt={project.title} className={styles['project-image']} />
            <div className={styles['project-content']}>
              <span className={styles['project-category']}>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles['project-tags']}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles['tag']}>{tag}</span>
                ))}
              </div>
              <a href="#" className={styles['view-details']}>View Details →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
