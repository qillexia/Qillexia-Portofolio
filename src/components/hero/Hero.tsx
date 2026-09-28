"use client";

import WavingPortfolioLanding, {
  WavingPortfolioLandingProps,
} from "@/components/ui/waving-portfolio-landing";

export default function Hero(props: WavingPortfolioLandingProps) {
  return (
    <section id="hero" className="w-full sticky top-16 z-0">
      <WavingPortfolioLanding
        title="Portfolio"
        lettersLeft={["P", "F"]}
        giantLetter="O"
        lettersRight={["RT", "LIO"]}
        accent="#0a0a0a"
        paper="#ffffff"
        ink="#0a0a0a"
        height="calc(100svh - 4rem)"
        sectionBadge="Section [01]"
        sectionIndex="01 / 08"
        greeting="Hello there!"
        {...props}
      />
    </section>
  );
}
