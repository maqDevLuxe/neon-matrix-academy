import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import HiredBySection from "@/components/home/HiredBySection";
import TechStackSection from "@/components/home/TechStackSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import MetricsSection from "@/components/home/MetricsSection";
import TerminalSection from "@/components/home/TerminalSection";
import MentorsSection from "@/components/home/MentorsSection";
import CyberpunkBanner from "@/components/home/CyberpunkBanner";
import CountersSection from "@/components/home/CountersSection";
import BlogSection from "@/components/home/BlogSection";
import ISASection from "@/components/home/ISASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <MatrixRain />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <HiredBySection />
      <TechStackSection />
      <ProjectsSection />
      <MetricsSection />
      <TerminalSection />
      <MentorsSection />
      <CyberpunkBanner />
      <CountersSection />
      <BlogSection />
      <ISASection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
