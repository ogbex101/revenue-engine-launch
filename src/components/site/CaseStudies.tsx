import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionHeader } from "./Services";

const cases = [
  {
    client: "Northwind Logistics",
    industry: "B2B Freight · 140 employees",
    headline: "From flat quarters to a 31% revenue lift in 90 days.",
    metric: "+31%",
    metricLabel: "Net new revenue",
    bullets: ["Re-segmented ICP into 3 tiers", "Re-priced 4 service lines", "Built weekly forecast cadence"],
    tint: "from-primary to-secondary",
  },
  {
    client: "Atlas Manufacturing",
    industry: "Industrial · 320 employees",
    headline: "Cut sales cycle from 94 to 58 days without discounting.",
    metric: "−38%",
    metricLabel: "Cycle length",
    bullets: ["Multi-threaded buying committee", "New POC playbook", "Loss-reason instrumentation"],
    tint: "from-secondary to-primary",
  },
  {
    client: "Brightline Software",
    industry: "SaaS · 45 employees",
    headline: "Doubled qualified pipeline in one quarter—no new hires.",
    metric: "2.1×",
    metricLabel: "SQL pipeline",
    bullets: ["Repositioned around 1 ICP", "Outbound sequence rebuild", "AE→CS handoff redesign"],
    tint: "from-primary to-accent",
  },
  {
    client: "Meridian Health",
    industry: "Healthcare services · 210 employees",
    headline: "Forecast accuracy from 54% to 89% in two quarters.",
    metric: "89%",
    metricLabel: "Forecast accuracy",
    bullets: ["Stage-exit criteria", "Deal review cadence", "Pipeline hygiene SLAs"],
    tint: "from-accent to-primary",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative bg-surface-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Proof, not promises"
            title="Measurable outcomes. Real operators. Receipts."
            sub="A sample of recent engagements. Every number is verified by the client and lives in their own dashboards."
          />
          <a
            href="#cases"
            className="hidden items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary md:inline-flex"
          >
            See all case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lift"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.tint}`}
              />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-ink">{c.client}</div>
                  <div className="text-xs text-ink-soft">{c.industry}</div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent-foreground">
                  <TrendingUp className="h-4 w-4 text-ink" />
                </div>
              </div>

              <h3 className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight">
                {c.headline}
              </h3>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="bg-gradient-brand bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                  {c.metric}
                </span>
                <span className="text-sm text-ink-soft">{c.metricLabel}</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
              >
                See the full story <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}