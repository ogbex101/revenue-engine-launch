import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Suspense, lazy } from "react";

const RevenueScene = lazy(() =>
  import("./RevenueScene").then((m) => ({ default: m.RevenueScene }))
);

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background ornaments */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.18),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.16),transparent_70%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full bg-accent text-accent-foreground">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
            Revenue acceleration for SMBs · 10–500 employees
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]"
          >
            Turn your sales pipeline into a{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                revenue engine
              </span>
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8 C 80 2, 220 14, 298 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease }}
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft"
          >
            Our data-driven sales strategies deliver <strong className="font-semibold text-ink">24% revenue growth in 90 days</strong>—without the guesswork, the bloated agency retainer, or the generic playbooks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#book"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-lift transition-all hover:shadow-glow hover:bg-secondary"
            >
              <span className="absolute inset-0 -z-10 rounded-xl bg-primary blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
              Book a Revenue Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink hover:bg-surface-soft"
            >
              See your revenue lift
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { k: "24%", v: "Avg revenue lift" },
              { k: "90", v: "Days to results" },
              { k: "180+", v: "SMBs accelerated" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-bold tracking-tight text-ink">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-soft">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative h-[420px] sm:h-[500px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <Suspense fallback={null}>
            <RevenueScene />
          </Suspense>
          {/* floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute right-4 top-8 rounded-2xl border border-border bg-background/90 p-3 shadow-lift backdrop-blur"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-medium text-ink-soft">Q3 pipeline velocity</span>
            </div>
            <div className="mt-1 text-xl font-bold text-ink">+42.6%</div>
          </motion.div>
        </motion.div>
      </div>

      <LogoStrip />
    </section>
  );
}

function LogoStrip() {
  const logos = ["NORTHWIND", "ATLAS GROUP", "MERIDIAN", "BRIGHTLINE", "PIVOT&CO", "CASCADE LABS", "OAKMONT", "VERTEX"];
  return (
    <div className="border-y border-border bg-surface-soft py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-soft">
          Trusted by growth-stage SMBs across North America
        </p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-bold tracking-widest text-ink/40"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}