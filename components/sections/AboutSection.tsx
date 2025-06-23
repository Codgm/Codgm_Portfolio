import styles from '../../styles/home.module.css';
import { about, experiences, education } from '../../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.aboutGrid}>
          <div className={styles.aboutMain}>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder}>
                <span>👨‍💻</span>
              </div>
            </div>
            
            <div className={styles.aboutText}>
              <h3 className={styles.aboutName}>{about.name}</h3>
              {about.description.map((text, index) => (
                <p key={index} className={styles.aboutDescription}>
                  {text}
                </p>
              ))}
              
              <div className={styles.aboutStats}>
                {about.stats.map((stat, index) => (
                  <div key={index} className={styles.stat}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.aboutDetails}>
            <div className={styles.experienceSection}>
              <h3 className={styles.subsectionTitle}>💼 경력</h3>
              <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineYear}>{exp.year}</div>
                      <h4 className={styles.timelineTitle}>{exp.title}</h4>
                      <div className={styles.timelineCompany}>{exp.company}</div>
                      <p className={styles.timelineDescription}>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.educationSection}>
              <h3 className={styles.subsectionTitle}>🎓 학력</h3>
              <div className={styles.educationList}>
                {education.map((edu, index) => (
                  <div key={index} className={styles.educationItem}>
                    <h4 className={styles.educationDegree}>{edu.degree}</h4>
                    <div className={styles.educationSchool}>{edu.school}</div>
                    <div className={styles.educationYear}>{edu.year}</div>
                    <p className={styles.educationDescription}>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 