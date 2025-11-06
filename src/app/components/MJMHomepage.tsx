"use client";
import { useState } from "react";

// MJM Strategy Group — Homepage Prototype (React + Tailwind)
// This component matches the Figma-style spec: sticky nav, hero, value cards,
// accordion, readiness diagram, outcomes, engagement, about, footer.

export default function MJMHomepage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const problems = [
    {
      title: "Strategy & Reinvention",
      body:
        "Reframe identity and advantage with leadership alignment, scenario mapping, and future-state models to decide where to play and how to win.",
      caseLabel: "Case: National service org reframed mission, regained share.",
    },
    {
      title: "Growth & Margin Expansion",
      body:
        "Translate market opportunity into value propositions, GTM plans, and incentive systems that focus sales on high-yield segments.",
      caseLabel: "Case: Mid-market tech hit growth in two quarters.",
    },
    {
      title: "Competing in the AI & Cloud Economy",
      body:
        "Differentiate vs. hyperscalers with service-tier architectures, latency/cost models, and vertical entry bundles that compete on value, not price.",
      caseLabel: "Case: Cloud infra shifted from cost to value.",
    },
    {
      title: "Securing Enterprise Confidence",
      body:
        "Build CFO- and CISO-ready investment cases, threat-to-value maps, and integration playbooks to unlock funding and accelerate adoption.",
      caseLabel: "Case: Security overlay won two enterprise deals.",
    },
    {
      title: "Organizational Health",
      body:
        "Align leadership, decision rights, culture, and operating discipline to improve execution speed and accountability.",
      caseLabel: "Case: Global firm clarified priorities and sped execution.",
    },
  ];

  const readiness = [
    "Leadership & Purpose",
    "Strategic Readiness",
    "Operational Readiness",
    "Structural Readiness",
    "Cultural Readiness",
    "Technical Readiness",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0C1B2A]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-lg bg-[#37B8AF]"
              aria-hidden="true"
            />
            <span className="font-semibold tracking-tight">
              MJM Strategy Group
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-[#37B8AF]">
              About
            </a>
            <a href="#expertise" className="hover:text-[#37B8AF]">
              Expertise
            </a>
            <a href="#work" className="hover:text-[#37B8AF]">
              Work
            </a>
            <a href="#insights" className="hover:text-[#37B8AF]">
              Insights
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-[#0C1B2A] text-white px-4 py-2 text-sm hover:bg-[#37B8AF] transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#F2F4F7] to-transparent"
          aria-hidden="true"
        />
        <svg
          className="absolute -top-24 -right-24 w-[600px] h-[600px] opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#37B8AF" />
              <stop offset="100%" stopColor="#37B8AF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#g)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs uppercase tracking-widest text-[#344054]">
            AI-First Strategy
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
            AI-Native Strategy for a World in Transformation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#344054] max-w-2xl">
            Organizations run faster and jump higher when they engage MJM to
            guide them — unlocking clarity, growth, and resilience in an age of
            disruption.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#0C1B2A] text-white px-6 py-3 text-sm font-medium hover:bg-[#37B8AF] transition"
            >
              Start the Conversation
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-2xl border border-[#0C1B2A] text-[#0C1B2A] px-6 py-3 text-sm font-medium hover:bg-[#F2F4F7] transition"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section
        className="mx-auto max-w-7xl px-6 py-24"
        id="expertise"
      >
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Promise</h2>
          <p className="mt-3 text-[#344054]">
            Greater clarity. Deeper analysis. Faster results. Lasting
            transformation.
          </p>
        </header>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            title="Visionary AI Use"
            desc="AI embedded across our process for speed, precision, and insight."
          />
          <ValueCard
            title="Rigor + Creativity"
            desc="Financial diligence + operational feasibility + market alignment."
          />
          <ValueCard
            title="Human-First Design"
            desc="Insights at AI speed; transformation at human speed."
          />
          <ValueCard
            title="Tangible Outcomes"
            desc="Tools leaders use to decide, align, and measure."
          />
        </div>
      </section>

      {/* What We Solve */}
      <section
        className="mx-auto max-w-7xl px-6 py-24"
        id="work"
      >
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">What We Solve</h2>
          <p className="mt-3 text-[#344054]">We turn complexity into momentum.</p>
        </header>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 overflow-hidden">
          {problems.map((p, idx) => (
            <div key={p.title} className="bg-white">
              <button
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-[#F2F4F7] transition text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-medium">{p.title}</span>
                <Chevron open={openIdx === idx} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-[#344054]">
                  <p>{p.body}</p>
                  <p className="mt-3 text-sm italic text-[#667085]">
                    {p.caseLabel}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* AI-First Readiness Framework */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F2F4F7] to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            AI-first transformation is a human-first journey.
          </h2>
          <p className="mt-3 text-center text-[#344054] max-w-2xl mx-auto">
            We prepare organizations across six readiness dimensions.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {readiness.map((item) => (
              <div key={item} className="flex flex-col items-center gap-3">
                <div className="h-20 w-20 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-[#0C1B2A]">
                    {item.split(" ")[0]}
                  </span>
                </div>
                <div className="text-sm text-center text-[#344054] max-w-[12ch]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Deliverables */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">What You Get</h3>
            <ul className="mt-6 space-y-4 text-[#344054]">
              <li>
                <b className="text-[#0C1B2A]">Growth:</b> revenue clarity, GTM
                activation, sales acceleration
              </li>
              <li>
                <b className="text-[#0C1B2A]">Efficiency:</b> process redesign,
                automation, operating leverage
              </li>
              <li>
                <b className="text-[#0C1B2A]">Transformation:</b> lasting
                cultural & structural change with AI at the core
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Michael */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait placeholder"
              className="rounded-3xl shadow-lg object-cover w-full h-[420px]"
            />
            <span className="absolute -bottom-4 left-6 bg-white rounded-xl border border-slate-200 px-3 py-1 text-xs uppercase tracking-wider">
              AI-Native Strategist & Sherpa
            </span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Michael Main</h3>
            <p className="mt-4 text-[#344054]">
              25 years advising CEOs and Boards through disruption. Combines
              AI-native strategy, financial rigor, and human-first design to
              deliver clarity, alignment, and results. Father, husband, Ironman,
              and cancer survivor — bringing humanity to an increasingly
              technical world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0C1B2A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#37B8AF]" aria-hidden />
              <span className="font-semibold tracking-tight">
                MJM Strategy Group
              </span>
            </div>
            <p className="mt-4 text-white/80 max-w-sm">
              AI-First Strategy for Transformational Outcomes
            </p>
          </div>
          <div>
            <h4 className="font-medium">Explore</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Contact</h4>
            <p className="mt-3 text-white/80">hello@mjmstrategygroup.com</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <span>© 2025 MJM Strategy Group, LLC. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="h-10 w-10 rounded-full bg-[#37B8AF]/20 flex items-center justify-center mb-4">
        <Dot />
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-[#344054]">{desc}</p>
    </div>
  );
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition ${open ? "rotate-90" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 5l6 5-6 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="3" />
    </svg>
  );
}
