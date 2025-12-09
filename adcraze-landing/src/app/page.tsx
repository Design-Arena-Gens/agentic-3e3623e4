"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart2,
  CalendarCheck2,
  CheckCircle2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  adSpend: string;
  goal: string;
};

export default function Home() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    adSpend: "",
    goal: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      company: "",
      adSpend: "",
      goal: "",
    });
  };

  const proofPoints = useMemo(
    () => [
      {
        label: "Average ROAS lift in 90 days",
        value: "+42%",
      },
      {
        label: "Accounts under management",
        value: "$18.5M",
      },
      {
        label: "Client retention past 12 months",
        value: "93%",
      },
    ],
    [],
  );

  const painPoints = useMemo(
    () => [
      "Bleeding budget on underperforming campaigns",
      "No clarity on which channels are actually profitable",
      "Agencies that hide behind vanity metrics instead of revenue",
    ],
    [],
  );

  const servicePillars = useMemo(
    () => [
      {
        icon: Target,
        title: "Paid Social that Converts",
        description:
          "Full-funnel Meta, TikTok, and LinkedIn campaigns engineered for profitable acquisition and retention.",
        bullets: [
          "Creative sprints based on live performance data",
          "Audience architectures tailored to your LTV",
          "Daily optimization backed by revenue signals",
        ],
      },
      {
        icon: LineChart,
        title: "Paid Search that Scales",
        description:
          "Intent-driven Google and Bing strategies that capture demand with precision and accountability.",
        bullets: [
          "Granular keyword sculpting and negative buildouts",
          "Revenue-weighted bidding strategies",
          "Landing page insights delivered weekly",
        ],
      },
      {
        icon: Sparkles,
        title: "Creative & CRO in Lockstep",
        description:
          "Data-backed creative testing, landing experiments, and offer positioning that shrink CAC.",
        bullets: [
          "Message testing mapped to audience segments",
          "Rapid-fire creative concepting",
          "Full funnel analytics dashboarding",
        ],
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "We cut wasted ad spend by 38% in the first month and crossed our revenue target six weeks later. Adcraze rebuilt our funnel with ruthless focus on profitability.",
        name: "Maya Chen",
        role: "Founder, LUNA Activewear",
        result: "+61% QoQ revenue",
      },
      {
        quote:
          "They operate like an in-house performance team. Every decision is tied to revenue and we always know what is happening, why it matters, and what they'll do next.",
        name: "Alex Romero",
        role: "VP Growth, FreightFlow SaaS",
        result: "CAC reduced 27%",
      },
      {
        quote:
          "Adcraze turned our paid media into a profit center. Their level of reporting and accountability is unmatched.",
        name: "Jamie Patel",
        role: "CMO, UrbanNest Living",
        result: "ROAS 5.1 → 7.4",
      },
    ],
    [],
  );

  const processSteps = useMemo(
    () => [
      {
        title: "Audit & Diagnose",
        description:
          "We dissect your current ad stack, tracking, and buyer journey to expose leaks and quick wins.",
        icon: ShieldCheck,
      },
      {
        title: "Rebuild Around Revenue",
        description:
          "We rebuild campaigns, creative, and measurement around the KPIs that keep you profitable.",
        icon: Rocket,
      },
      {
        title: "Scale with Accountability",
        description:
          "You get weekly revenue-focused reporting, daily optimization, and a partner obsessed with your growth.",
        icon: Zap,
      },
    ],
    [],
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,127,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,53,0.95),rgba(10,26,53,0.98))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-8 md:px-8 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2A7FFF] font-semibold">
              AC
            </div>
            <div>
              <p className="text-lg font-semibold uppercase tracking-wider text-white">
                Adcraze
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">
                Performance Partners
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/70">
            <a className="rounded-full border border-white/0 px-4 py-1.5 transition hover:border-white/40 hover:text-white" href="#services">
              Capabilities
            </a>
            <a className="rounded-full border border-white/0 px-4 py-1.5 transition hover:border-white/40 hover:text-white" href="#process">
              Process
            </a>
            <a className="rounded-full border border-white/0 px-4 py-1.5 transition hover:border-white/40 hover:text-white" href="#proof">
              Proof
            </a>
            <a className="rounded-full border border-[#FF6B35] px-4 py-1.5 text-[#FF6B35] transition hover:border-white hover:text-white" href="#connect">
              Get a Plan
            </a>
          </nav>
        </header>

        <section className="mt-16 flex flex-col gap-12 lg:mt-20 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-7 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/60 bg-[#FF6B35]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
              Performance Obsessed
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Stop wasting ad dollars. Start scaling revenue with accountability.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              We operate as your performance growth pod—rebuilding your paid media around the KPIs that matter: profitable revenue, controlled CAC, and predictable scale.
            </p>
            <ul className="space-y-3 text-white/80">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#2A7FFF]" />
                  <span className="text-base font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2A7FFF] px-7 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-20px_rgba(42,127,255,0.8)] transition hover:brightness-105"
              >
                Book Your Strategy Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                Request a Performance Audit
              </a>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A7FFF]/20 text-[#2A7FFF]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                    Who We Work With
                  </p>
                  <p className="text-base font-semibold text-white">
                    SMB leaders • Ecom founders • Marketing managers
                  </p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
                We only win when you win.
              </div>
            </div>
          </div>

          <aside className="w-full max-w-md flex-1 space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_35px_90px_-40px_rgba(8,17,38,1)] backdrop-blur-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Proven Performance
            </p>
            <div className="grid gap-4">
              {proofPoints.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6"
                >
                  <p className="text-3xl font-bold text-[#2A7FFF]">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#2A7FFF]/40 bg-[#2A7FFF]/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2A7FFF]">
                Transparent Reporting
              </p>
              <p className="mt-3 text-sm text-white/70">
                Live dashboards, revenue-tied KPIs, and twice-weekly syncs keep you informed, accountable, and confident in every dollar spent.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-white/60 backdrop-blur lg:mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
            Trusted By Teams Scaling Smarter
          </p>
          <div className="mt-6 grid gap-6 text-sm font-semibold uppercase tracking-[0.4em] text-white/30 sm:grid-cols-3 lg:grid-cols-6">
            <span>NorthPeak Labs</span>
            <span>Atlas Commerce</span>
            <span>Lumen Foods</span>
            <span>FreightFlow</span>
            <span>Brightline SaaS</span>
            <span>UrbanNest</span>
          </div>
        </section>

        <section id="proof" className="mt-20 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] backdrop-blur">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Performance-based advertising that fights for profit.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Every strategy is engineered to increase revenue without ballooning costs. You get senior operators, transparent communication, and relentless optimization.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Sparkles className="h-6 w-6 text-[#2A7FFF]" />
                <p className="mt-4 text-lg font-semibold text-white">
                  Daily Optimization
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Tight feedback loops ensure budgets move toward the best-performing segments fast.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="h-6 w-6 text-[#2A7FFF]" />
                <p className="mt-4 text-lg font-semibold text-white">
                  Source-of-Truth Tracking
                </p>
                <p className="mt-2 text-sm text-white/60">
                  We rebuild attribution and analytics so decisions tie directly to revenue, not vanity metrics.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <BarChart2 className="h-6 w-6 text-[#2A7FFF]" />
                <p className="mt-4 text-lg font-semibold text-white">
                  Predictable Scale
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Structured testing roadmaps that stack incremental wins and protect your margins.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-7 text-white/80 backdrop-blur"
              >
                <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/50">{testimonial.role}</p>
                  </div>
                  <span className="rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35]">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mt-24 space-y-8 rounded-[30px] border border-white/10 bg-white/10 px-6 py-10 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur"
        >
          <div className="flex flex-col items-start gap-4 text-white lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                What you get with Adcraze in your corner
              </h2>
              <p className="mt-2 max-w-2xl text-base text-white/70">
                Senior strategists, media buyers, and creative partners united around profitable growth. No bloated retainers. No outsourcing. Just accountable execution.
              </p>
            </div>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35] px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#FF6B35] transition hover:border-white hover:text-white"
            >
              See If We&apos;re a Fit
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {servicePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur transition hover:border-[#2A7FFF]/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2A7FFF] via-[#2A7FFF]/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A7FFF]/15 text-[#2A7FFF]">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-white/60">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center"
        >
          <div className="space-y-5 rounded-[30px] border border-white/10 bg-black/30 p-8 text-white backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              How We Work Together
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              A battle-tested framework built for speed and clarity.
            </h2>
            <p className="text-base text-white/70">
              Every engagement starts with a rapid audit sprint to surface waste, fix tracking, and prioritize the fast wins that impact revenue within the first 30 days.
            </p>
            <div className="mt-6 grid gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A7FFF]/15 text-[#2A7FFF]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[30px] border border-white/10 bg-gradient-to-br from-[#2A7FFF]/15 via-transparent to-[#FF6B35]/15 p-8 text-white shadow-[0_45px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-5xl font-bold text-[#2A7FFF]">18</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Average Experiments Per Month
              </p>
              <p className="mt-4 text-sm text-white/70">
                Structured test roadmaps ensure we&apos;re compounding wins quickly without losing efficiency.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-5xl font-bold text-[#FF6B35]">14</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Days to First Revenue Win
              </p>
              <p className="mt-4 text-sm text-white/70">
                Launch and learn within two weeks—so you see meaningful impact fast.
              </p>
            </div>
          </div>
        </section>

        <section
          id="connect"
          className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6 rounded-[30px] border border-white/10 bg-black/30 p-8 text-white backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Let&apos;s Build Your Growth Engine
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tell us where you&apos;re stuck and we&apos;ll build a performance plan.
            </h2>
            <p className="text-base text-white/70">
              Complete the form and we&apos;ll respond within one business day with a tailored next-step plan. We&apos;ll include audit findings, growth projections, and the resources we&apos;ll deploy first.
            </p>
            <div className="rounded-3xl border border-[#2A7FFF]/40 bg-[#2A7FFF]/10 p-6">
              <div className="flex items-center gap-3">
                <CalendarCheck2 className="h-6 w-6 text-[#2A7FFF]" />
                <p className="text-lg font-semibold text-white">
                  Prefer to book instantly?
                </p>
              </div>
              <p className="mt-3 text-sm text-white/70">
                Skip the form and grab a 30-minute working session with our strategy team.
              </p>
              <a
                href="https://cal.com/adcraze/strategy"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(255,107,53,0.8)] transition hover:brightness-105"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
              <p className="font-semibold text-white">
                What happens next?
              </p>
              <ol className="mt-3 space-y-2 text-white/60">
                <li>• We review your submission within hours.</li>
                <li>• You receive a free paid media teardown and revenue roadmap.</li>
                <li>• If we&apos;re aligned, we launch the first sprint in 14 days or less.</li>
              </ol>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-white/10 p-8 text-white shadow-[0_55px_140px_-60px_rgba(8,17,38,0.95)] backdrop-blur">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col text-sm font-medium text-white/80">
                  Full name
                  <input
                    className="mt-2 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#2A7FFF] focus:outline-none focus:ring-2 focus:ring-[#2A7FFF]/40"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    placeholder="You"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-white/80">
                  Work email
                  <input
                    className="mt-2 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#2A7FFF] focus:outline-none focus:ring-2 focus:ring-[#2A7FFF]/40"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="flex flex-col text-sm font-medium text-white/80">
                Company name
                <input
                  className="mt-2 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#2A7FFF] focus:outline-none focus:ring-2 focus:ring-[#2A7FFF]/40"
                  type="text"
                  required
                  value={formState.company}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      company: event.target.value,
                    }))
                  }
                  placeholder="Company Inc."
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-white/80">
                Monthly paid media spend
                <select
                  className="mt-2 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#2A7FFF] focus:outline-none focus:ring-2 focus:ring-[#2A7FFF]/40"
                  required
                  value={formState.adSpend}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      adSpend: event.target.value,
                    }))
                  }
                >
                  <option value="" disabled>
                    Select your range
                  </option>
                  <option value="15k-25k">$15k – $25k</option>
                  <option value="25k-50k">$25k – $50k</option>
                  <option value="50k-100k">$50k – $100k</option>
                  <option value="100k-plus">$100k+</option>
                </select>
              </label>
              <label className="flex flex-col text-sm font-medium text-white/80">
                What&apos;s the growth goal?
                <textarea
                  className="mt-2 h-28 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#2A7FFF] focus:outline-none focus:ring-2 focus:ring-[#2A7FFF]/40"
                  required
                  value={formState.goal}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      goal: event.target.value,
                    }))
                  }
                  placeholder="Share key targets, current blockers, and timelines."
                />
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_65px_-35px_rgba(255,107,53,0.9)] transition hover:brightness-105"
              >
                Submit &amp; Get Your Plan
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-xs text-white/50">
                We respond within one business day. No spam, no junior account managers—just senior strategists.
              </p>
              {submitted && (
                <div className="flex items-center gap-3 rounded-3xl border border-[#2A7FFF]/40 bg-[#2A7FFF]/10 px-4 py-3 text-sm font-semibold text-[#2A7FFF]">
                  <CheckCircle2 className="h-5 w-5" />
                  Thanks—your performance plan is being prepared. Expect an email shortly.
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="mt-24 rounded-[30px] border border-white/10 bg-white/5 px-6 py-10 text-white backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Still Evaluating?
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Download the Revenue Scale Playbook
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/70">
                24 pages of battle-tested frameworks for Meta, Google, and lifecycle marketing—straight from our performance desk. Use it internally or bring it to a call with us.
              </p>
            </div>
            <a
              href="https://adcraze.com/playbook"
              className="inline-flex items-center gap-2 rounded-full bg-[#2A7FFF] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_60px_-35px_rgba(42,127,255,0.9)] transition hover:brightness-105"
            >
              Get the Playbook
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-10 text-white/60">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-white">Adcraze</p>
              <p className="mt-3 text-sm text-white/60">
                Performance-based digital advertising for teams that need results now—not next quarter.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Contact
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>hello@adcraze.com</p>
                <p>+1 (415) 555-0198</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Headquarters
              </p>
              <p className="mt-3 text-sm">Remote-first, global coverage across NA & EU time zones.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Adcraze. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#process">
                Process
              </a>
              <a className="hover:text-white" href="#connect">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
