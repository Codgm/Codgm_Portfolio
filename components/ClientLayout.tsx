"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import BackgroundEffects from "./BackgroundEffects";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      };
      setIsMobile(checkMobile());
    }
  }, []);

  return (
    <>
      <LoadingScreen />
      {!isMobile && <CustomCursor />}
      <BackgroundEffects />
      <Header />
      {children}
      <Footer />
    </>
  );
} 