import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import BackgroundEffects from "../components/BackgroundEffects";
import LoadingScreen from "../components/LoadingScreen";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codgm - Frontend Developer",
  description: "창의적인 웹 경험을 만드는 프론트엔드 개발자 서규민의 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LoadingScreen />
        <CustomCursor />
        <BackgroundEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}