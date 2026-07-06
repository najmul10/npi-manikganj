import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { DepartmentsPageContent } from "@/components/site/departments-page-content";

export const metadata: Metadata = {
  title: "Departments — 8 Engineering Programs",
  description:
    "Explore 8 industry-aligned Diploma in Engineering departments at NPI Manikganj — Computer, Civil, Electrical, Mechanical, Food, Textile, Architecture & Automobile Engineering. Modern labs, expert faculty, clear career pathways.",
  alternates: { canonical: "/departments" },
};

export default function DepartmentsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Academic Programs"
        title={<>Our <span className="text-gradient-gold">Departments</span></>}
        subtitle="Eight industry-aligned Diploma in Engineering programs with modern labs, expert faculty and clear career pathways."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Departments" }]}
        bgImage="/campus/lab-electrical-demo.jpg"
      />
      <DepartmentsPageContent />
    </SiteShell>
  );
}
