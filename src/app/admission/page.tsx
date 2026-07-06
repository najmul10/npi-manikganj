import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { AdmissionPageContent } from "@/components/site/admission-page-content";

export const metadata: Metadata = {
  title: "Admission 2024-25 — Apply Now",
  description:
    "Diploma in Engineering admission open at NPI Manikganj. 8 departments, merit scholarships, job placement support. SSC passed with minimum GPA 2.00 can apply. Apply online today!",
  alternates: { canonical: "/admission" },
};

export default function AdmissionPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Admission 2024-25"
        title={<>Join the <span className="text-gradient-gold">NPI Manikganj</span> Family</>}
        subtitle="Diploma in Engineering admission open across 8 modern departments. Scholarships, job placement support and affordable fees — build your engineering career with us."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admission" }]}
        bgImage="/campus/admission-office-1.jpg"
      />
      <AdmissionPageContent />
    </SiteShell>
  );
}
