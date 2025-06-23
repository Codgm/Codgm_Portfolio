'use client';

import { useEffect } from 'react';

export default function BackgroundEffects() {
  useEffect(() => {
    // Global floating elements for all sections
    const createGlobalFloatingElements = () => {
      const container = document.getElementById('globalFloatingElements');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 8}s`;
        element.style.animationDuration = `${8 + Math.random() * 6}s`;
        element.style.opacity = `${0.3 + Math.random() * 0.4}`;
        container.appendChild(element);
      }
    };

    // Matrix rain effect
    const createMatrixRain = () => {
      const container = document.getElementById('matrixRain');
      if (!container) return;

      container.innerHTML = '';
      
      const columns = Math.floor(window.innerWidth / 20);
      const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
      
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 3}s`;
        column.style.animationDuration = `${3 + Math.random() * 2}s`;
        
        let chars = '';
        for (let j = 0; j < 20; j++) {
          chars += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '<br>';
        }
        column.innerHTML = chars;
        
        container.appendChild(column);
      }
    };

    const createCircuitPattern = () => {
      const container = document.getElementById('circuitPattern');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 20; i++) {
        const circuit = document.createElement('div');
        circuit.className = 'circuit-line';
        circuit.style.left = `${Math.random() * 100}%`;
        circuit.style.top = `${Math.random() * 100}%`;
        circuit.style.width = `${50 + Math.random() * 100}px`;
        circuit.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(circuit);
      }
    };

    // Data stream effect
    const createDataStream = () => {
      const container = document.getElementById('dataStream');
      if (!container) return;
      
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'data-line';
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${100 + Math.random() * 200}px`;
        line.style.animationDelay = `${Math.random() * 6}s`;
        line.style.animationDuration = `${6 + Math.random() * 4}s`;
        container.appendChild(line);
      }
    };

    // Initialize background animations
    createGlobalFloatingElements();
    createMatrixRain();
    createDataStream();
    createCircuitPattern();

    const handleResize = () => {
      createMatrixRain();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="page-background"></div>
      <div className="floating-elements" id="globalFloatingElements"></div>
      <div className="matrix-rain" id="matrixRain"></div>
      <div className="circuit-pattern" id="circuitPattern"></div>
      <div className="cyberpunk-grid"></div>
      <div className="glitch-bg"></div>
      <div className="neon-pulse"></div>
      <div className="data-stream" id="dataStream"></div>
    </>
  );
} 