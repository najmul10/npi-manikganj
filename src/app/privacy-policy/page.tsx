"use client";

import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { LegalContent } from "@/components/site/legal-content";

const intro =
  "At National Polytechnic Institute Manikganj (NPI), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store and protect your data when you visit our website or use our online services. By using this website, you agree to the practices described in this policy.";

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information that you provide directly to us, including your name, email address, phone number, SSC GPA and preferred department when you submit an admission application or feedback form. We also automatically collect certain technical data such as your IP address, browser type, device information and pages visited, which helps us improve the website's performance and user experience.",
  },
  {
    heading: "How We Use Your Information",
    body: "The information we collect is used to process admission applications, respond to your enquiries, send important notices and updates related to academics or admissions, improve our website content and services, and comply with legal obligations under the Bangladesh Technical Education Board (BTEB) guidelines. We do not use your personal data for commercial advertising or sell it to third parties.",
  },
  {
    heading: "Data Storage & Security",
    body: "Your personal information is stored securely on our protected servers. We implement appropriate technical and organizational measures — including encryption, access controls and regular security reviews — to safeguard your data against unauthorized access, alteration, disclosure or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Sharing of Information",
    body: "We do not sell, trade or rent your personal information to third parties. We may share limited data with trusted partners (such as hosting providers or BTEB officials) only when necessary for operating the website, processing applications, or complying with legal requirements. All such partners are bound by strict confidentiality obligations.",
  },
  {
    heading: "Cookies & Tracking Technologies",
    body: "Our website may use cookies and similar technologies to enhance your browsing experience, remember preferences and analyze website traffic. You can control or disable cookies through your browser settings. Disabling cookies may affect some features of the website, but you will still be able to access most content.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, correct or request deletion of your personal information held by us. You may also opt out of receiving promotional communications at any time. To exercise any of these rights, please contact us through the Contact page with your request and we will respond within a reasonable timeframe.",
  },
  {
    heading: "Children's Privacy",
    body: "Our services are primarily intended for students who have completed SSC or equivalent examinations. We do not knowingly collect personal information from children under the age of 16 without parental consent. If you believe a minor has provided us with personal data, please contact us so we can take appropriate action.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised 'Last Updated' date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Legal"
        title={<>Privacy <span className="text-gradient-gold">Policy</span></>}
        subtitle="Your privacy matters to us. Learn how we collect, use and protect your personal information at NPI Manikganj."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <LegalContent intro={intro} sections={sections} lastUpdated="January 2026" />
    </SiteShell>
  );
}
