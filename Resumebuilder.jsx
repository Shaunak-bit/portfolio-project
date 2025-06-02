import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './resumebuilder.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import homeStyles from '../pages/home.module.css';

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    professionalTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
    experiences: [{
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    education: [{
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    skills: [{
      skillName: '',
      proficiency: 50
    }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newExperiences = [...prev.experiences];
      newExperiences[index] = {
        ...newExperiences[index],
        [name]: value
      };
      return {
        ...prev,
        experiences: newExperiences
      };
    });
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newEducation = [...prev.education];
      newEducation[index] = {
        ...newEducation[index],
        [name]: value
      };
      return {
        ...prev,
        education: newEducation
      };
    });
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: '',
        institution: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newSkills = [...prev.skills];
      newSkills[index] = {
        ...newSkills[index],
        [name]: name === 'proficiency' ? Number(value) : value
      };
      return {
        ...prev,
        skills: newSkills
      };
    });
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { skillName: '', proficiency: 50 }]
    }));
  };

  const deleteExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index)
    }));
  };

  const deleteEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const deleteSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className={styles.builderPage}>
      <header className={homeStyles['portfolio-header']}>
        <div className={homeStyles.container}>
          <nav>
            <div className={homeStyles.logo}>Portfolio</div>
            <ul className={homeStyles['nav-links']}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume-builder" className={homeStyles.active}>Resume Builder</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Resume <span>Builder</span></h1>
        <p className={styles.subtitle}>Create a professional resume in minutes with our easy-to-use builder</p>

        <div className={styles.builderContainer}>
          <div className={styles.editorSection}>
            <div className={styles.editorHeader}>
              <h2>Resume Editor</h2>
              <div className={styles.editorActions}>
                <button className={styles.previewBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg  " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Show Preview
                </button>
                <button className={styles.saveBtn}>Save</button>
                <button className={styles.downloadBtn}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>

            <div className={styles.editorTabs}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'personal' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                Personal Info
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'experience' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'education' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'skills' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>

            {activeTab === 'personal' ? (
              <div className={styles.editorForm}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Professional Title</label>
                  <input
                    type="text"
                    name="professionalTitle"
                    value={formData.professionalTitle}
                    onChange={handleChange}
                    placeholder="Software Developer"
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Professional Summary</label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="A brief summary of your professional background and goals..."
                    rows={4}
                  />
                </div>
              </div>
            ) : activeTab === 'experience' ? (
              <div className={styles.editorForm}>
                {formData.experiences.map((exp, index) => (
                  // In the experience section
                  <div key={index} className={styles.experienceItem}>
                    <div className={styles.itemHeader}>
                      <h3>Experience #{index + 1}</h3>
                      <button 
                        className={styles.deleteBtn} 
                        onClick={() => deleteExperience(index)}
                        type="button"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Job Title</label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={exp.jobTitle}
                        onChange={(e) => handleExperienceChange(index, e)}
                        placeholder="Software Developer"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, e)}
                        placeholder="Tech Company Inc."
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Location</label>
                      <input
                        type="text"
                        name="location"
                        value={exp.location}
                        onChange={(e) => handleExperienceChange(index, e)}
                        placeholder="San Francisco, CA"
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Start Date</label>
                        <input
                          type="text"
                          name="startDate"
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(index, e)}
                          placeholder="Jan 2020"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>End Date</label>
                        <input
                          type="text"
                          name="endDate"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(index, e)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Description</label>
                      <textarea
                        name="description"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, e)}
                        placeholder="Describe your responsibilities and achievements..."
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
                <button className={styles.addExperienceBtn} onClick={addExperience}>
                  + Add Experience
                </button>
              </div>
            ) : activeTab === 'education' ? (
              <div className={styles.editorForm}>
                {formData.education.map((edu, index) => (
                  // In the education section
                  <div key={index} className={styles.educationItem}>
                    <div className={styles.itemHeader}>
                      <h3>Education #{index + 1}</h3>
                      <button 
                        className={styles.deleteBtn} 
                        onClick={() => deleteEducation(index)}
                        type="button"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Degree</label>
                      <input
                        type="text"
                        name="degree"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Institution</label>
                      <input
                        type="text"
                        name="institution"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="University of Technology"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Location</label>
                      <input
                        type="text"
                        name="location"
                        value={edu.location}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Boston, MA"
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Start Date</label>
                        <input
                          type="text"
                          name="startDate"
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(index, e)}
                          placeholder="Sep 2016"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>End Date</label>
                        <input
                          type="text"
                          name="endDate"
                          value={edu.endDate}
                          onChange={(e) => handleEducationChange(index, e)}
                          placeholder="May 2020"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Description</label>
                      <textarea
                        name="description"
                        value={edu.description}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Relevant coursework, achievements, activities..."
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
                <button className={styles.addEducationBtn} onClick={addEducation}>
                  + Add Education
                </button>
              </div>
            ) : activeTab === 'skills' ? (
              <div className={styles.editorForm}>
                {formData.skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem} style={{ backgroundColor: '#1f2937', color: '#fff' }}>
                    <div className={styles.itemHeader} style={{ color: '#fff' }}>
                      <h3>Skill #{index + 1}</h3>
                      <button 
                        className={styles.deleteBtn} 
                        onClick={() => deleteSkill(index)}
                        type="button"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className={styles.formGroup} style={{ color: '#fff' }}>
                      <label>Skill Name</label>
                      <input
                        type="text"
                        name="skillName"
                        value={skill.skillName}
                        onChange={(e) => handleSkillChange(index, e)}
                        placeholder="JavaScript"
                        style={{ backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151' }}
                      />
                    </div>
                    <div className={styles.formGroup} style={{ color: '#fff' }}>
                      <label>Proficiency</label>
                      <input
                        type="range"
                        name="proficiency"
                        min="0"
                        max="100"
                        value={skill.proficiency}
                        onChange={(e) => handleSkillChange(index, e)}
                      />
                      <span>{skill.proficiency}%</span>
                    </div>
                  </div>
                ))}
                <button className={styles.addSkillBtn} onClick={addSkill}>
                  + Add Skill
                </button>
              </div>
            ) : null}
          </div>

          <div className={styles.previewSection}>
            <div className={styles.resumePreview}>
              <h1>{formData.fullName || 'Your Name'}</h1>
              <p className={styles.previewTitle}>{formData.professionalTitle || 'Professional Title'}</p>
              
              <div className={styles.contactInfo}>
                {formData.email && (
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {formData.email}
                  </span>
                )}
                {formData.phone && (
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {formData.phone}
                  </span>
                )}
                {formData.location && (
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {formData.location}
                  </span>
                )}
                {formData.website && (
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {formData.website}
                  </span>
                )}
              </div>

              {formData.summary && (
                <div className={styles.summarySection}>
                  <h3>Professional Summary</h3>
                  <p>{formData.summary}</p>
                </div>
              )}

              {formData.experiences.length > 0 && (
                <div className={styles.experienceSection}>
                  <h3>Experience</h3>
                  {formData.experiences.map((exp, index) => (
                    <div key={index} className={styles.experienceItem}>
                      <div className={styles.experienceHeader}>
                        <h4>{exp.jobTitle}</h4>
                        <p className={styles.company}>{exp.company}</p>
                        <p className={styles.experienceMeta}>
                          {exp.location} | {exp.startDate} - {exp.endDate}
                        </p>
                      </div>
                      <p className={styles.experienceDescription}>{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.education.length > 0 && (
                <div className={styles.educationSection}>
                  <h3>Education</h3>
                  {formData.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                      <div className={styles.educationHeader}>
                        <h4>{edu.degree}</h4>
                        <p className={styles.institution}>{edu.institution}</p>
                        <p className={styles.location}>{edu.location}</p>
                        <p className={styles.educationMeta}>{edu.startDate} - {edu.endDate}</p>
                      </div>
                      <p className={styles.educationDescription}>{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.skills.length > 0 && (
                <div className={styles.skillsSection}>
                  <h3>Skills</h3>
                  {formData.skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                      <p>{skill.skillName} - {skill.proficiency}%</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>P</span>
              <span className={styles.logoText}>Portfolio</span>
            </div>
            <p>Showcasing my creative work, skills, and professional journey through an interactive portfolio experience.</p>
            <div className={styles.socialLinks}>
              <a href="https://github.com  " target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com  " target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com  " target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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
              <li><Link to="/resume-builder">Resume Builder</Link></li>
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