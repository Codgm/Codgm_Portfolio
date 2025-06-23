'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading ${isHidden ? 'hidden' : ''}`}>
      <div className="loading-text">Codgm.init()...</div>
    </div>
  );
} 