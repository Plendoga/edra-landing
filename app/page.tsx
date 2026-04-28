import { Header }   from "@/components/Header";
import { Hero }     from "@/components/Hero";
import { Features } from "@/components/Features";
import { Rooms }    from "@/components/Rooms";
import { Pricing }  from "@/components/Pricing";
import { Contact }  from "@/components/Contact";
import { Footer }   from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-edra-bg">
      <div id="scroll-bar" />
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <Features />
        <Rooms />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
