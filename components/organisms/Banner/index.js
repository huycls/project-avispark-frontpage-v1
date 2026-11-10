"use client";

import Button from "@/components/atoms/Button";
import AnimatedGridPattern from "@/components/molecules/AnimatedGridPattern";
import HeroStats from "@/components/molecules/HeroStats";
import LogoMarquee from "@/components/molecules/LogoMarquee";
import TemplateMockups from "@/components/molecules/TemplateMockups";

export default function Banner() {
  return (
    <section data-grid-interactive className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full mask-[radial-gradient(ellipse_farthest-corner_at_center,black_28%,transparent_76%)]">
        <AnimatedGridPattern maxOpacity={0.22} interactive glowRadius={2} />
      </div>

      <div className="relative z-10 container flex min-h-[calc(100svh-5rem)] flex-col justify-center py-12 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Avispark Marketplace
            </p>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Production-Ready Templates & Modern Web Experiences
            </h1>
            <p className="mt-5 text-base leading-7 text-neutral-grey sm:text-lg dark:text-neutral-l-grey">
              A curated collection of UX-optimized interface templates and design
              assets, ready to deploy on Figma, Framer, and leading template
              marketplaces.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button href="#work" className="px-6 py-2.5 text-base">
                Explore Templates
              </Button>
              <Button
                href="#services"
                variant="outline"
                className="px-6 py-2.5 text-base"
              >
                Custom Design Service
              </Button>
            </div>

            <div className="mt-8">
              <LogoMarquee />
            </div>
          </div>

          <TemplateMockups />
        </div>

        <div className="mt-12 md:mt-16">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}
