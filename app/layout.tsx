"use client"
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import BackgroundEffects from "../components/BackgroundEffects";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Codgm - Developer",
  description: "창의적인 웹 경험을 만드는 개발자 서규민의 포트폴리오",
  keywords: [
    "서규민",
    "서규민 포트폴리오",
    "Seogyumin",
    "Seogyumin Portfolio",
    "프론트엔드 개발자",
    "Frontend Developer",
    "웹 개발자",
    "Web Developer"
  ],
  openGraph: {
    title: "Codgm - Developer",
    description: "창의적인 웹 경험을 만드는 개발자 서규민의 포트폴리오",
    url: "https://codgm.vercel.app",
    siteName: "Codgm Portfolio",
    images: [
      {
        url: "/images/glitch-bg.svg",
        width: 1200,
        height: 630,
        alt: "Codgm Portfolio 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codgm - Frontend Developer",
    description: "창의적인 웹 경험을 만드는 개발자 서규민의 포트폴리오",
    images: ["/images/glitch-bg.svg"],
  },
  metadataBase: new URL("https://codgm.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'ko': '/ko',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 모바일 디바이스 감지
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
    <html lang="ko,en">
      <body>
        <LoadingScreen />
        {!isMobile && <CustomCursor />}
        <BackgroundEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}