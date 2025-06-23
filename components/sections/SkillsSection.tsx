import { useState } from 'react';
import styles from '../../styles/home.module.css';
import { skillCategories } from '../../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContent}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.aboutText}>
          다양한 기술 스택을 활용하여 창의적이고 효율적인 솔루션을 제공합니다.
        </p>
        
        <div className={styles.skillsTabs}>
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              className={`${styles.skillTab} ${selectedCategory === index ? styles.active : ''}`}
              onClick={() => setSelectedCategory(index)}
              style={{ '--tab-color': category.color } as React.CSSProperties}
            >
              <span className={styles.tabIcon}>{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
        
        <div className={styles.skillsDisplay}>
          <div className={styles.skillsGrid}>
            {skillCategories[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className={styles.skillCard}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={styles.skillHeader}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <div className={styles.skillLevel}>{skill.level}%</div>
                </div>
                
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillProgress} 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skillCategories[selectedCategory].color
                    }}
                  ></div>
                </div>
                
                <div className={styles.skillDetails}>
                  <div className={styles.skillDetail}>
                    <span className={styles.detailLabel}>경력:</span>
                    <span className={styles.detailValue}>{skill.experience}</span>
                  </div>
                  <div className={styles.skillDetail}>
                    <span className={styles.detailLabel}>프로젝트:</span>
                    <span className={styles.detailValue}>{skill.projects}개</span>
                  </div>
                </div>
                
                {hoveredSkill === skill.name && (
                  <div className={styles.skillTooltip}>
                    <div className={styles.tooltipContent}>
                      <strong>{skill.name}</strong>
                      <p>경력: {skill.experience}</p>
                      <p>완료 프로젝트: {skill.projects}개</p>
                      <p>숙련도: {skill.level}%</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.skillsSummary}>
            <h3 className={styles.summaryTitle}>
              {skillCategories[selectedCategory].icon} {skillCategories[selectedCategory].title} 요약
            </h3>
            <div className={styles.summaryStats}>
              <div className={styles.summaryStat}>
                <span className={styles.statNumber}>
                  {skillCategories[selectedCategory].skills.length}
                </span>
                <span className={styles.statLabel}>기술</span>
              </div>
              <div className={styles.summaryStat}>
                <span className={styles.statNumber}>
                  {Math.round(
                    skillCategories[selectedCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / 
                    skillCategories[selectedCategory].skills.length
                  )}
                </span>
                <span className={styles.statLabel}>평균 숙련도</span>
              </div>
              <div className={styles.summaryStat}>
                <span className={styles.statNumber}>
                  {skillCategories[selectedCategory].skills.reduce((acc, skill) => acc + skill.projects, 0)}
                </span>
                <span className={styles.statLabel}>총 프로젝트</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 