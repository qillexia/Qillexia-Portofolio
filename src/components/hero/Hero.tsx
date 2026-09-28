"use client";

import { useLanguage } from "@/context";
import WavingPortfolioLanding, {
  WavingPortfolioLandingProps,
} from "@/components/ui/waving-portfolio-landing";

export default function Hero(props: WavingPortfolioLandingProps) {
  const { t } = useLanguage();

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
        sectionBadge={props.sectionBadge || t.hero.sectionBadge}
        sectionIndex="01 / 08"
        greeting={props.greeting || t.hero.greeting}
        {...props}
      />
    </section>
  );
}
