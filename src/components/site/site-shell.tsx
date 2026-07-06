"use client";

import { Topbar } from "@/components/site/topbar";
import { SiteHeader } from "@/components/site/site-header";
import { Footer } from "@/components/site/footer";
import { AdmissionModal } from "@/components/site/admission-modal";
import { BackToTop } from "@/components/site/back-to-top";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Topbar />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
      <AdmissionModal />
      <BackToTop />
    </div>
  );
}
