'use client';
import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling with header offset
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = 70; // 헤더 높이
          const additionalOffset = 20; // 추가 여백
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - additionalOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const anchorElements = document.querySelectorAll('a[href^="#"]');
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Observe elements for animations
    const animatedElements = document.querySelectorAll(
      '.skill-card, .project-card, .skill-category, .about-main, .timeline-item, .education-item, .skill-tab, .skill-card'
    );
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
      element.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });

    // Cleanup
    return () => {
      // 이벤트 리스너 제거 (안전하게)
      anchorElements.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}