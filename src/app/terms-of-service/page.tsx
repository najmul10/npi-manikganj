import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { LegalContent } from "@/components/site/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the National Polytechnic Institute Manikganj (NPI) website. Rules and guidelines for using our online services.",
  alternates: { canonical: "/terms-of-service" },
};

const intro =
  "Welcome to the National Polytechnic Institute Manikganj (NPI) website. By accessing and using this website, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services. If you do not agree with any part of these terms, please do not use this website.";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing this website, you acknowledge that you have read, understood and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These terms apply to all visitors, students, applicants and users of the website.",
  },
  {
    heading: "Use of Website",
    body: "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment. Prohibited behavior includes harassing or causing distress to any person, transmitting obscene or offensive content, disrupting the normal flow of dialogue, or attempting to gain unauthorized access to any part of the website, its server or database.",
  },
  {
    heading: "Admission Applications",
    body: "The online admission application form is provided for the convenience of prospective students. Submitting an application does not guarantee admission. Admission is subject to verification of documents, SSC GPA requirements, seat availability and approval by the admission committee. All information provided in the application must be accurate and truthful — providing false information may result in disqualification.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website — including text, graphics, logos, images, the NPI logo, department information and design elements — is the property of National Polytechnic Institute Manikganj or its content contributors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify or republish any content without prior written permission, except for personal, non-commercial use.",
  },
  {
    heading: "Academic Information",
    body: "Information about departments, courses, fees, schedules and academic policies published on this website is provided for general guidance only. While we strive to keep it accurate and up to date, the official BTEB curriculum and institutional policies always take precedence. We reserve the right to update programs, fees and policies without prior notice.",
  },
  {
    heading: "Results & Student Data",
    body: "The online result checker provides examination results based on roll numbers stored in our database. While every effort is made to ensure accuracy, the official BTEB published results are the final authority. Student data shown through the result checker is limited to public academic information. Any misuse of this data is strictly prohibited.",
  },
  {
    heading: "Third-Party Links",
    body: "This website may contain links to third-party websites such as Facebook, Google Maps and external resources. These links are provided for your convenience only. We do not control and are not responsible for the content, privacy policies or practices of these third-party sites. Accessing them is at your own risk.",
  },
  {
    heading: "Limitation of Liability",
    body: "NPI Manikganj and its affiliates shall not be liable for any direct, indirect, incidental, consequential or punitive damages arising from your use of, or inability to use, this website or its services. We do not warrant that the website will be uninterrupted, error-free or free from harmful components. Your use of the website is at your sole risk.",
  },
  {
    heading: "Changes to Terms",
    body: "We reserve the right to modify or update these Terms of Service at any time without prior notice. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes acceptance of the revised terms. Please review these terms periodically.",
  },
];

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Legal"
        title={<>Terms of <span className="text-gradient-gold">Service</span></>}
        subtitle="The rules and guidelines for using the NPI Manikganj website and our online services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <LegalContent intro={intro} sections={sections} lastUpdated="January 2026" />
    </SiteShell>
  );
}
