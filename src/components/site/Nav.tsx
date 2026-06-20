import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case Studies" },
  { href: "#calculator", label: "Calculator" },
  { href: "#quiz", label: "Assessment" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={[
          "mx-auto mt-3 flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "h-14 rounded-2xl border border-border/70 bg-background/80 px-4 shadow-soft backdrop-blur-xl"
            : "h-16 bg-transparent",
        ].join(" ")}
      >
        <a href="#top" className="flex items-center" aria-label="CustomerResults — Results Matter">
          <img
            src={logo}
            alt="CustomerResults"
            className="h-9 w-auto sm:h-10"
            width={640}
            height={280}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-primary hover:shadow-glow"
        >
          Book a Call
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}