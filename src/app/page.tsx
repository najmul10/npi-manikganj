"use client";

import { SiteShell } from "@/components/site/site-shell";
import { Hero } from "@/components/site/hero";
import { MarqueeBanner } from "@/components/site/marquee-banner";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { HomeDepartments } from "@/components/site/home-departments";
import { WhyChoose } from "@/components/site/why-choose";
import { Testimonials } from "@/components/site/testimonials";
import { FacebookSection } from "@/components/site/facebook-section";
import { HomeAdmissionCTA } from "@/components/site/home-admission-cta";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <MarqueeBanner />
      <About />
      <Stats />
      <HomeDepartments />
      <WhyChoose />
      <HomeAdmissionCTA />
      <Testimonials />
      <FacebookSection />
    </SiteShell>
  );
}
