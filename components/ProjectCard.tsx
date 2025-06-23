import styles from '../styles/projectcard.module.css';

interface ProjectCardProps {
  title: string;
  desc: string;
  stack: string;
  link: string;
  github?: string;
}

export default function ProjectCard({ title, desc, stack, link, github }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{desc}</p>
        <div className={styles.stack}>
          <strong>Tech Stack:</strong> {stack}
        </div>
        <div className={styles.links}>
          <a 
            href={link} 
            className={styles.link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 Live Demo
          </a>
          {github && (
            <a 
              href={github} 
              className={styles.link}
              target="_blank" 
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}