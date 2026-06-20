import { motion } from "framer-motion";
import { ArrowRight, Calendar, Shield, Zap } from "lucide-react";

export function CTA() {
  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-background sm:p-16 lg:p-20"
        >
          {/* Glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.55),transparent_70%)]" />
            <div className="absolute -bottom-32 right-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.4),transparent_70%)]" />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Free · 45 minutes · No pitch
              </span>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">
                Book your Revenue Audit. Leave with a 90-day plan.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/75">
                We'll diagnose the three highest-leverage moves in your funnel and tell you—on the call—whether we're the right partner. If we're not, you keep the diagnosis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-accent-foreground shadow-glow animate-pulse-ring transition-transform hover:-translate-y-0.5"
                >
                  Book a Revenue Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-semibold text-background backdrop-blur transition-colors hover:bg-white/10"
                >
                  Take the 3-question assessment
                </a>
              </div>
            </div>

            <ul className="space-y-5">
              {[
                { icon: Calendar, t: "45-minute working session", s: "Not a sales call. Cameras on, screens shared." },
                { icon: Zap, t: "Three highest-leverage moves", s: "Specific to your funnel, named on the call." },
                { icon: Shield, t: "Zero obligation", s: "If we're not the right fit, you keep the diagnostic." },
              ].map(({ icon: Icon, t, s }) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-background">{t}</div>
                    <div className="mt-0.5 text-sm text-background/70">{s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}