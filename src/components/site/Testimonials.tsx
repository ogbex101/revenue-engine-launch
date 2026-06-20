import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  {
    quote: "We'd been stuck at $4M for three years. Ninety days in, we closed our biggest quarter ever—and our forecast was within 4%.",
    name: "Sarah Lindqvist",
    role: "CEO, Northwind Logistics",
    photo: t1,
  },
  {
    quote: "I've worked with three sales consultancies. CustomerResults is the only one that left us with a system the team actually runs.",
    name: "Marcus Okonkwo",
    role: "VP Sales, Atlas Manufacturing",
    photo: t2,
  },
  {
    quote: "They didn't sell us a playbook. They installed an operating cadence. Pipeline doubled in a quarter without new hires.",
    name: "Mei Tanaka",
    role: "Founder, Brightline Software",
    photo: t3,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Operators, not pundits"
          title="What founders and revenue leaders say after working with us."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lift"
            >
              <svg className="h-7 w-7 text-accent" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                <path d="M9 8h6v6H9c0 4 2 6 6 6v4c-6 0-10-4-10-10V8zm14 0h6v6h-6c0 4 2 6 6 6v4c-6 0-10-4-10-10V8z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-pretty text-[17px] italic leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}