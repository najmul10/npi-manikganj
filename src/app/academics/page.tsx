"use client";

import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { Academics } from "@/components/site/academics";
import { BlogSection } from "@/components/site/blog";

export default function AcademicsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Academics & Student Services"
        title={<>Notices, Results & <span className="text-gradient-gold">Smart Support</span></>}
        subtitle="Stay updated with the latest notices, check your exam results online, and access all student services — class routines, office applications, e-class and more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
        bgImage="/campus/students-seminar.jpg"
      />
      <Academics />
      <BlogSection />
    </SiteShell>
  );
}
