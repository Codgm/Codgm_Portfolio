'use client';
import { useEffect } from 'react';
import styles from '../../styles/home.module.css';
import { hero } from '../../data/portfolioData';

export default function HeroSection() {
  useEffect(() => {
    // 컴포넌트 마운트 시 필요한 초기화 작업
    return () => {
      // 컴포넌트 언마운트 시 정리 작업
    };
  }, []);

  return (
    <main id="hero" className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          {hero.title1}<br />
          {hero.title2}<br />
          <span style={{ color: '#00ffff' }}>{hero.name}</span>입니다.
        </h1>
        <p className={styles.heroSubtitle}>{hero.subtitle}</p>
        <a href="#about" className={styles.ctaButton}>{hero.cta}</a>
      </div>
    </main>
  );
} 