import styles from '../../styles/home.module.css';

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "codgm.dev@gmail.com",
    link: "mailto:codgm.dev@gmail.com"
  },
  {
    icon: "🐱",
    label: "GitHub",
    value: "github.com/Codgm",
    link: "https://github.com/Codgm"
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.aboutText}>
          새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시면<br />
          언제든지 연락해 주세요!
        </p>
        <div className={styles.contactLinks}>
          {contactInfo.map((contact) => (
            <a 
              key={contact.label}
              href={contact.link} 
              className={styles.contactLink}
              target={contact.link.startsWith('http') ? "_blank" : undefined}
              rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              {contact.icon} {contact.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 