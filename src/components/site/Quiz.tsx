import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Choice = { label: string; score: number };
const questions: { q: string; choices: Choice[] }[] = [
  {
    q: "How predictable is your monthly revenue?",
    choices: [
      { label: "We hit forecast ±5% every month", score: 3 },
      { label: "We're directionally right, sometimes surprised", score: 2 },
      { label: "Honestly, every month is a coin flip", score: 1 },
    ],
  },
  {
    q: "How clearly is your ICP defined?",
    choices: [
      { label: "1–2 segments, scored, and instrumented", score: 3 },
      { label: "We have a doc but reps interpret loosely", score: 2 },
      { label: "We'll sell to anyone who'll buy", score: 1 },
    ],
  },
  {
    q: "How does your team run deal reviews?",
    choices: [
      { label: "Weekly, with stage-exit criteria", score: 3 },
      { label: "Monthly, mostly forecast roll-up", score: 2 },
      { label: "Ad-hoc when a deal stalls", score: 1 },
    ],
  },
];

const tiers = [
  {
    min: 8,
    name: "Operator Mode",
    headline: "You're running a real revenue system.",
    body: "Your team operates with discipline. The next leap is sharper segmentation and forecast precision—usually a 10–15% lift inside a quarter.",
  },
  {
    min: 5,
    name: "Inflection Point",
    headline: "You're one rebuild away from compounding growth.",
    body: "The bones are there but execution is leaking revenue. A 90-day Revenue Audit typically unlocks +20–30% with no new headcount.",
  },
  {
    min: 0,
    name: "Reactive Mode",
    headline: "Your revenue is louder than your system.",
    body: "Right now growth depends on heroics. We've taken teams like yours from coin-flip months to predictable +24% lift in 90 days.",
  },
];

function useTypewriter(text: string, speed = 28) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = answers.reduce((a, b) => a + b, 0);
  const tier = tiers.find((t) => total >= t.min)!;
  const done = step >= questions.length;

  function pick(score: number) {
    const next = [...answers, score];
    setAnswers(next);
    setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setEmail("");
    setSubmitted(false);
  }

  return (
    <section id="quiz" className="relative bg-surface-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="AI sales assessment"
          title="3 questions. A personalized revenue diagnostic."
          sub="Get your sales maturity tier and the single highest-leverage move for the next 90 days."
        />

        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="h-1 w-full bg-border">
            <motion.div
              className="h-full bg-gradient-brand"
              initial={false}
              animate={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Question {step + 1} of {questions.length}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {questions[step].q}
                  </h3>
                  <div className="mt-6 space-y-3">
                    {questions[step].choices.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => pick(c.score)}
                        className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-background px-5 py-4 text-left text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
                      >
                        {c.label}
                        <ArrowRight className="h-4 w-4 text-ink-soft transition-all group-hover:translate-x-1 group-hover:text-primary" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <ResultCard
                  key="result"
                  tier={tier}
                  total={total}
                  email={email}
                  setEmail={setEmail}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  onReset={reset}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  tier,
  total,
  email,
  setEmail,
  submitted,
  setSubmitted,
  onReset,
}: {
  tier: (typeof tiers)[number];
  total: number;
  email: string;
  setEmail: (v: string) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  onReset: () => void;
}) {
  const typed = useTypewriter(tier.headline, 26);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
          Your tier
        </span>
        <span className="text-sm font-semibold text-primary">{tier.name}</span>
      </div>
      <h3 className="mt-4 min-h-[3.5rem] text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {typed}
        <span className="ml-1 inline-block h-7 w-[3px] -translate-y-1 bg-primary align-middle animate-caret" />
      </h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-ink-soft"
      >
        {tier.body} (Score: {total}/9)
      </motion.p>

      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes("@")) setSubmitted(true);
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] outline-none transition-colors placeholder:text-ink-soft/70 focus:border-primary focus:ring-4 focus:ring-primary/15"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-lift transition-all hover:bg-secondary hover:shadow-glow"
          >
            Email me the full report <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      ) : (
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          Sent. Check your inbox in the next 60 seconds for your tailored 90-day plan.
        </div>
      )}

      <button
        onClick={onReset}
        className="mt-6 text-sm font-medium text-ink-soft underline-offset-4 hover:text-ink hover:underline"
      >
        Retake the assessment
      </button>
    </motion.div>
  );
}