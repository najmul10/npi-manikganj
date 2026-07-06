"use client";

import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { Contact } from "@/components/site/contact";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Have Questions? <span className="text-gradient-gold">Let's Talk</span></>}
        subtitle="Visit our campus, call the admission hotline, or leave your feedback — we're here to help you take the next step."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        bgImage="/campus/fb-innovation.jpg"
      />
      <Contact />
    </SiteShell>
  );
}
