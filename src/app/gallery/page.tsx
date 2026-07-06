import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHeader } from "@/components/site/page-header";
import { Gallery } from "@/components/site/gallery";
import { FacebookSection } from "@/components/site/facebook-section";

export const metadata: Metadata = {
  title: "Gallery — Campus Life at NPI Manikganj",
  description:
    "Explore authentic photos of campus life at NPI Manikganj — students, events, labs, workshops, award ceremonies and everyday moments from our polytechnic institute.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Campus Gallery"
        title={<>Life at <span className="text-gradient-gold">NPI Manikganj</span></>}
        subtitle="A glimpse into our campus, labs, workshops, events and the vibrant moments that make student life memorable."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        bgImage="/campus/event-award-ceremony.jpg"
      />
      <Gallery />
      <FacebookSection />
    </SiteShell>
  );
}
