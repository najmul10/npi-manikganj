"use client";

import { Topbar } from "@/components/site/topbar";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { MarqueeBanner } from "@/components/site/marquee-banner";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { Departments } from "@/components/site/departments";
import { Leadership } from "@/components/site/leadership";
import { Teachers } from "@/components/site/teachers";
import { WhyChoose } from "@/components/site/why-choose";
import { Academics } from "@/components/site/academics";
import { Gallery } from "@/components/site/gallery";
import { BlogSection } from "@/components/site/blog";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { AdmissionModal } from "@/components/site/admission-modal";
import { BackToTop } from "@/components/site/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Topbar />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MarqueeBanner />
        <About />
        <Stats />
        <Departments />
        <Leadership />
        <Teachers />
        <WhyChoose />
        <Academics />
        <Gallery />
        <Testimonials />
        <BlogSection />
        <Contact />
      </main>
      <Footer />

      {/* Global overlays */}
      <AdmissionModal />
      <BackToTop />
    </div>
  );
}
