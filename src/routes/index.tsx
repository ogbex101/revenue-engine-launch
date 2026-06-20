import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Calculator } from "@/components/site/Calculator";
import { Quiz } from "@/components/site/Quiz";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CustomerResults — Turn your sales pipeline into a revenue engine" },
      { name: "description", content: "Data-driven sales and revenue strategies that deliver 24% growth in 90 days for SMBs. Book a free Revenue Audit." },
      { property: "og:title", content: "CustomerResults — Revenue Acceleration for SMBs" },
      { property: "og:description", content: "24% revenue growth in 90 days. Data-driven sales strategies for SMBs." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <CaseStudies />
      <Calculator />
      <Quiz />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
