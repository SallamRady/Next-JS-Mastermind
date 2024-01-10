import AboutSection from "@/components/aboutSection/AboutSection";
import AchievementsSection from "@/components/achievement/AchievementSection";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import MainNavbar from "@/components/mainNavbar/MainNavbar";
import ProjectsSection from "@/components/project/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <MainNavbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
