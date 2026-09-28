import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Skills } from "@/components/skills";
import { Works } from "@/components/works";
import { Achievements } from "@/components/achievements";
import { Certifications } from "@/components/certifications";
import { Organizations } from "@/components/organizations";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">
      <Hero />
      <div className="relative z-10 bg-white rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] border-t border-neutral-200">
        <Intro />
        <Skills />
        <Works />
        <Achievements />
        <Certifications />
        <Organizations />
        <Contact />
      </div>
    </main>
  );
}
