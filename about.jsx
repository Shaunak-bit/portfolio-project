import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.css';

const defaultAboutMe = `I'm a passionate developer with expertise in creating modern web applications and digital experiences.`;

const defaultSkills = {
  frontend: [
    'React',
    'Vue.js',
    'Angular',
    'JavaScript/TypeScript',
    'HTML5/CSS3',
    'Tailwind CSS',
    'SASS/SCSS',
  ],
  backend: [
    'Node.js',
    'Express',
    'Django',
    'Ruby on Rails',
    'PHP',
    'RESTful APIs',
    'GraphQL',
  ],
  database: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'Redis',
    'Supabase',
    'Prisma ORM',
  ],
};

const defaultWorkExperience = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description:
      'Leading the frontend development team in building scalable web applications. Implementing modern UI/UX designs and optimizing performance.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2019 - 2022',
    description:
      'Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with design and product teams to deliver high-quality software.',
  },
];

const About = () => {
  const [aboutMe, setAboutMe] = useState('');
  const [skills, setSkills] = useState({ frontend: [], backend: [], database: [] });
  const [workExperience, setWorkExperience] = useState([]);
  const [editSection, setEditSection] = useState(null);
  const [tempAboutMe, setTempAboutMe] = useState('');
  const [tempSkills, setTempSkills] = useState({ frontend: '', backend: '', database: '' });
  const [tempWorkExperience, setTempWorkExperience] = useState('');

  useEffect(() => {
    // Load saved content or defaults
    const savedAboutMe = localStorage.getItem('aboutMe') || defaultAboutMe;
    const savedSkills = JSON.parse(localStorage.getItem('skills')) || defaultSkills;
    const savedWorkExp = JSON.parse(localStorage.getItem('workExperience')) || defaultWorkExperience;

    setAboutMe(savedAboutMe);
    setSkills(savedSkills);
    setWorkExperience(savedWorkExp);
  }, []);

  // Helpers to convert skills array to multiline string and back
  const skillsToString = (skillsArray) => skillsArray.join('\n');
  const stringToSkills = (str) =>
    str
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

  // Helpers to convert work experience array to editable string and back
  // Format: Title | Company | Period | Description (multiline)
  const workExpToString = (workExpArray) =>
    workExpArray
      .map(
        (item) =>
          `${item.title} | ${item.company} | ${item.period} | ${item.description.replace(/\n/g, ' ')}`
      )
      .join('\n');

  const stringToWorkExp = (str) =>
    str
      .split('\n')
      .map((line) => {
        const parts = line.split('|').map((p) => p.trim());
        return {
          title: parts[0] || '',
          company: parts[1] || '',
          period: parts[2] || '',
          description: parts[3] || '',
        };
      })
      .filter((item) => item.title.length > 0);

  const handleEdit = (section) => {
    setEditSection(section);
    if (section === 'aboutMe') {
      setTempAboutMe(aboutMe);
    } else if (section === 'skills') {
      setTempSkills({
        frontend: skillsToString(skills.frontend),
        backend: skillsToString(skills.backend),
        database: skillsToString(skills.database),
      });
    } else if (section === 'workExperience') {
      setTempWorkExperience(workExpToString(workExperience));
    }
  };

  const handleSave = () => {
    if (editSection === 'aboutMe') {
      setAboutMe(tempAboutMe);
      localStorage.setItem('aboutMe', tempAboutMe);
    } else if (editSection === 'skills') {
      const newSkills = {
        frontend: stringToSkills(tempSkills.frontend),
        backend: stringToSkills(tempSkills.backend),
        database: stringToSkills(tempSkills.database),
      };
      setSkills(newSkills);
      localStorage.setItem('skills', JSON.stringify(newSkills));
    } else if (editSection === 'workExperience') {
      const newWorkExp = stringToWorkExp(tempWorkExperience);
      setWorkExperience(newWorkExp);
      localStorage.setItem('workExperience', JSON.stringify(newWorkExp));
    }
    setEditSection(null);
  };

  const handleCancel = () => {
    setEditSection(null);
  };

  return (
    <div className={styles['portfolio-app']}>
      {/* Header/Navigation */}
      <header className={styles['portfolio-header']}>
        <div className={styles.container}>
          <nav>
            <div className={styles.logo}>Portfolio</div>
            <ul className={styles['nav-links']}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.container}>
        {/* About Me Section */}
        <section className={styles.section}>
          <h1 className={styles.aboutTitle}>
            About <span style={{ color: '#8b5cf6' }}>Me</span>
          </h1>
          {editSection === 'aboutMe' ? (
            <>
              <textarea
                className={styles.textareaEdit}
                rows={6}
                value={tempAboutMe}
                onChange={(e) => setTempAboutMe(e.target.value)}
              />
              <div className={styles.editButtons}>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <p className={styles.editableContent} onClick={() => handleEdit('aboutMe')}>
              {aboutMe}
            </p>
          )}
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <p className={styles.sectionSubtitle}>
            I've developed expertise in various technologies and tools throughout my career
          </p>
          {editSection === 'skills' ? (
            <>
              <div className={styles.skillsGrid}>
                {['frontend', 'backend', 'database'].map((category) => (
                  <div key={category} className={styles.skillCategory}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <textarea
                      className={styles.textareaEdit}
                      rows={8}
                      value={tempSkills[category]}
                      onChange={(e) =>
                        setTempSkills((prev) => ({ ...prev, [category]: e.target.value }))
                      }
                    />
                  </div>
                ))}
              </div>
              <div className={styles.editButtons}>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className={styles.skillsGrid}>
              {/* Frontend */}
              <div className={styles.skillCategory}>
                <h3>Frontend Development</h3>
                <ul className={styles.skillList}>
                  {skills.frontend.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              {/* Backend */}
              <div className={styles.skillCategory}>
                <h3>Backend Development</h3>
                <ul className={styles.skillList}>
                  {skills.backend.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              {/* Database */}
              <div className={styles.skillCategory}>
                <h3>Database</h3>
                <ul className={styles.skillList}>
                  {skills.database.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Work Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <p className={styles.sectionSubtitle}>My professional journey in the tech industry</p>
          {editSection === 'workExperience' ? (
            <>
              <textarea
                className={styles.textareaEdit}
                rows={10}
                value={tempWorkExperience}
                onChange={(e) => setTempWorkExperience(e.target.value)}
              />
              <div className={styles.editButtons}>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className={styles.workExperience}>
              {workExperience.map((job, idx) => (
                <div key={idx} className={styles.workItem}>
                  <h3 className={styles.workTitle}>{job.title}</h3>
                  <p className={styles.workCompany}>{job.company}</p>
                  <p className={styles.workPeriod}>{job.period}</p>
                  <p className={styles.workDescription}>{job.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Edit Buttons */}
        {editSection === null && (
          <div className={styles.editButtons} style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
            <button className={styles.saveButton} onClick={() => handleEdit('aboutMe')}>
              Edit About Me
            </button>
            <button className={styles.saveButton} onClick={() => handleEdit('skills')}>
              Edit Skills
            </button>
            <button className={styles.saveButton} onClick={() => handleEdit('workExperience')}>
              Edit Work Experience
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={styles['portfolio-footer']}>
        <div className={styles.container}>
          <div className={styles['footer-content']}>
            <div className={styles['footer-about']}>
              <h3>Portfolio</h3>
              <p>Showcasing my creative work, skills, and professional journey through an interactive portfolio experience.</p>
              <div className={styles['social-icons']}>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.158-10.126-5.134-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={styles['footer-links']}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume-builder">Resume Builder</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
              </ul>
            </div>
            
            <div className={styles['footer-contact']}>
              <h4>Get In Touch</h4>
              <p>Have a project in mind or want to collaborate?</p>
              <Link to="/contact" className={styles.btn}>Contact Me</Link>
            </div>
          </div>
          
          <div className={styles['footer-bottom']}>
            <p>© 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
