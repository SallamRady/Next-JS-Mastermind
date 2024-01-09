import HeroSection from "@/components/hero/HeroSection";
import MainNavbar from "@/components/mainNavbar/MainNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <MainNavbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
