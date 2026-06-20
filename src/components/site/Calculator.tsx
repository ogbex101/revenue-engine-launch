import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { ArrowRight } from "lucide-react";

function format(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function Calculator() {
  const [revenue, setRevenue] = useState(2_500_000);
  const [winRate, setWinRate] = useState(22);
  const [cycle, setCycle] = useState(60);

  const { lift, projected, deals } = useMemo(() => {
    // Simple, transparent model: revenue × (effective uplift)
    const winLift = Math.min(0.6, (35 - winRate) / 100 + 0.06); // closer to 35% win-rate = more upside
    const cycleLift = Math.min(0.25, Math.max(0, (cycle - 40) / 200));
    const total = 0.08 + winLift + cycleLift; // baseline 8%
    const projected = revenue * total;
    const deals = Math.round((projected / Math.max(8000, revenue / 80)) * 1);
    return { lift: Math.round(total * 100), projected, deals };
  }, [revenue, winRate, cycle]);

  return (
    <section id="calculator" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Revenue calculator"
          title="In 30 seconds, see what 90 days could be worth to you."
          sub="Move the sliders. The model is the same one we use in week-one diagnostics with new clients."
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-lift lg:grid-cols-[1.1fr_1fr]"
        >
          {/* Inputs */}
          <div className="space-y-8 p-8 sm:p-10">
            <Slider
              label="Current annual revenue"
              value={revenue}
              min={250_000}
              max={50_000_000}
              step={50_000}
              onChange={setRevenue}
              format={format}
            />
            <Slider
              label="Average win rate"
              value={winRate}
              min={5}
              max={60}
              step={1}
              onChange={setWinRate}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Average sales cycle (days)"
              value={cycle}
              min={14}
              max={180}
              step={1}
              onChange={setCycle}
              format={(v) => `${v} days`}
            />
          </div>

          {/* Output dashboard */}
          <div className="relative bg-gradient-brand p-8 text-primary-foreground sm:p-10">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <svg width="100%" height="100%" aria-hidden>
                <defs>
                  <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Projected 90-day lift
              </p>
              <motion.div
                key={projected}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl"
              >
                {format(projected)}
              </motion.div>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Equivalent to <strong>+{lift}%</strong> on current revenue.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Mini label="New deals closed" value={`+${deals}`} />
                <Mini label="Cycle compression" value={`−${Math.max(0, Math.round((cycle - 40) * 0.35))}d`} />
              </div>

              {/* mini bar viz */}
              <div className="mt-8 flex h-28 items-end gap-2">
                {[0.35, 0.5, 0.42, 0.65, 0.6, 0.78, 0.72, 0.92, 1].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t-md bg-accent/90"
                  />
                ))}
              </div>

              <a
                href="#book"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Pressure-test this number with us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
      <div className="text-[11px] uppercase tracking-wider text-primary-foreground/75">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight">{value}</div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  format: (n: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-semibold text-ink">{label}</label>
        <span className="text-lg font-bold tracking-tight text-primary">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-glow [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary"
        style={{
          background: `linear-gradient(to right, #2563EB 0%, #2563EB ${pct}%, #E5E7EB ${pct}%, #E5E7EB 100%)`,
        }}
      />
    </div>
  );
}