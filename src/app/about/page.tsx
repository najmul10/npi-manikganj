import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { Leadership } from "@/components/site/leadership";
import { WhyChoose } from "@/components/site/why-choose";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the National Polytechnic Institute Manikganj (NPI) — a BTEB-approved technical education hub committed to producing skilled engineering professionals since 2001.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About NPI Manikganj"
        title={<>Engineering Tomorrow's{" "}
        <span className="text-gradient-gold">Innovators</span> Today</>}
        subtitle="The National Polytechnic Institute, Manikganj is a modern technical education hub committed to producing skilled, job-ready engineering professionals since 2001."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        bgImage="/campus/campus-group-steps.jpg"
      />
      <About />
      <Stats />
      <WhyChoose />
      <Leadership />
    </SiteShell>
  );
}
