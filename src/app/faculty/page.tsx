import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { Leadership } from "@/components/site/leadership";
import { Teachers } from "@/components/site/teachers";

export const metadata: Metadata = {
  title: "Faculty & Leadership",
  description:
    "Meet the experienced faculty and leadership of NPI Manikganj — engineers and educators who mentor students through projects, internships and career planning.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Our Faculty"
        title={<>Learn From <span className="text-gradient-gold">Experienced</span> Engineers & Mentors</>}
        subtitle="Our instructors blend academic depth with real-world industry experience — mentoring students both in the classroom and in the lab."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
        bgImage="/campus/leadership-meeting.jpg"
      />
      <Leadership />
      <Teachers />
    </SiteShell>
  );
}
