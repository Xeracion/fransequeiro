import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { BentoServices } from "@/components/BentoServices";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BentoServices />
        <ExperienceTimeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
