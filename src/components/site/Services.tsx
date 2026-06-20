import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, Compass, Workflow, Users } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Revenue Acceleration",
    methodology: "The 90-Day Lift",
    body: "We diagnose the leaks in your funnel, rewire your pricing and offer, and ship a measurable revenue lift inside one quarter—not one fiscal year.",
    proof: "Avg +24% MRR by day 90",
  },
  {
    icon: Workflow,
    title: "Sales Process Optimization",
    methodology: "Pipeline-as-a-System",
    body: "We don't just optimize your sales process—we make it predictable. Our methodology turns chaos into clarity so reps close more deals with confidence.",
    proof: "1.6× win-rate, 38% shorter cycle",
  },
  {
    icon: Compass,
    title: "Sales Management Coaching",
    methodology: "The Operator's Cadence",
    body: "We coach your sales leaders to run weekly forecasting, deal reviews, and rep development like a top-quartile operator—with the dashboards to prove it.",
    proof: "+62% forecast accuracy",
  },
  {
    icon: Users,
    title: "Go-to-Market Strategy",
    methodology: "ICP-First Positioning",
    body: "We pressure-test your ICP, sharpen your positioning against the real competitive set, and turn your story into pipeline you can actually close.",
    proof: "3.2× inbound qualified meetings",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Four practices. One outcome: revenue you can forecast."
          sub="Every engagement starts with a Revenue Audit, then runs one of four playbooks—battle-tested across 180+ SMBs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  methodology,
  body,
  proof,
  index,
}: (typeof services)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lift"
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
          {methodology}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-soft">{body}</p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm font-medium italic text-ink-soft">{proof}</span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
          Explore <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}