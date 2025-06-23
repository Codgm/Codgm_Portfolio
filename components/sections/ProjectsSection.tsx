import ProjectCard from '../ProjectCard';
import styles from '../../styles/home.module.css';
import { projects } from '../../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <p className={styles.aboutText}>
        다양한 프로젝트를 통해 기술력을 키우고 창의적인 솔루션을 만들어왔습니다.
      </p>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
} 