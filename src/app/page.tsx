import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Header />

      {/* 
        The scrollytelling container needs to be relative to contain 
        the absolute Overlay which is 500vh, matching the ScrollyCanvas container 
      */}
      <div id="home" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
