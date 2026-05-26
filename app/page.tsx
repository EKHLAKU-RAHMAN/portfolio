
import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}