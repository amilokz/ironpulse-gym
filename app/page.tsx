import Navbar, { WHATSAPP_JOIN } from "./components/Navbar";
import Reveal from "./components/Reveal";

/* ---------------------------------- data ---------------------------------- */

const STATS = [
  { value: "2,500+", label: "Active Members" },
  { value: "15+", label: "Certified Trainers" },
  { value: "12,000", label: "Sq Ft of Iron" },
  { value: "8", label: "Years of Gains" },
];

const PROGRAMS = [
  {
    title: "Strength Training",
    desc: "Barbells, racks and 12,000 sq ft of iron. Build raw power with progressive-overload programs, coached rep by rep.",
    tag: "Most Popular",
  },
  {
    title: "HIIT & Conditioning",
    desc: "45-minute metabolic burners. Sleds, battle ropes and assault bikes — torch up to 600 calories a session.",
    tag: "Fat Burn",
  },
  {
    title: "Boxing & MMA",
    desc: "Learn to strike, move and defend. Heavy bags, pad work and footwork drills for fighters of every level.",
    tag: "Combat",
  },
  {
    title: "Yoga & Mobility",
    desc: "Recover like a pro. Guided mobility flows and yoga sessions that keep your joints bulletproof for life.",
    tag: "Recovery",
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching with a certified trainer — custom programming and targets built entirely around you.",
    tag: "1-on-1",
  },
  {
    title: "Nutrition Coaching",
    desc: "Desi-diet-friendly meal plans. Hit your protein goals without giving up daal, roti and doodh patti.",
    tag: "Diet Plans",
  },
];

const SCHEDULE: { day: string; classes: { time: string; name: string }[] }[] = [
  {
    day: "Monday",
    classes: [
      { time: "6:30 AM", name: "Sunrise HIIT" },
      { time: "12:30 PM", name: "Strength Club" },
      { time: "6:00 PM", name: "Boxing Fundamentals" },
      { time: "8:00 PM", name: "Powerlifting" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "6:30 AM", name: "Mobility Flow" },
      { time: "12:30 PM", name: "HIIT Express" },
      { time: "6:00 PM", name: "Strength Club" },
      { time: "8:00 PM", name: "Evening Yoga" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:30 AM", name: "Sunrise HIIT" },
      { time: "12:30 PM", name: "Boxing Fundamentals" },
      { time: "6:00 PM", name: "Powerlifting" },
      { time: "8:00 PM", name: "Core Crusher" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:30 AM", name: "Strength Club" },
      { time: "12:30 PM", name: "HIIT Express" },
      { time: "6:00 PM", name: "Boxing Sparring" },
      { time: "8:00 PM", name: "Mobility Flow" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:30 AM", name: "Sunrise HIIT" },
      { time: "12:30 PM", name: "Strength Club" },
      { time: "6:00 PM", name: "Fight Night Drills" },
      { time: "8:00 PM", name: "Evening Yoga" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:00 AM", name: "Weekend Warrior WOD" },
      { time: "11:00 AM", name: "Open Mat Boxing" },
      { time: "5:00 PM", name: "Full-Body Strength" },
    ],
  },
];

const TRAINERS = [
  {
    initials: "AK",
    name: "Ahmed “Tank” Khan",
    specialty: "Strength & Powerlifting",
    exp: "12 yrs coaching · 220 kg deadlift",
    gradient: "from-red-600 via-brand-500 to-orange-500",
  },
  {
    initials: "SM",
    name: "Sana Malik",
    specialty: "HIIT & Conditioning",
    exp: "8 yrs coaching · CrossFit L2",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    initials: "BR",
    name: "Bilal Raza",
    specialty: "Boxing & MMA",
    exp: "10 yrs coaching · National gold medalist",
    gradient: "from-rose-600 via-red-500 to-brand-500",
  },
  {
    initials: "FN",
    name: "Fatima Noor",
    specialty: "Yoga & Mobility",
    exp: "7 yrs coaching · RYT-500 certified",
    gradient: "from-amber-500 via-brand-400 to-red-500",
  },
];

const PLANS = [
  {
    name: "Monthly",
    price: "₨ 5,000",
    period: "/month",
    features: ["Full gym floor access", "1 group class per day", "Locker facility", "Fitness assessment"],
    featured: false,
    cta: "Start Monthly",
  },
  {
    name: "Quarterly",
    price: "₨ 12,000",
    period: "/3 months",
    features: [
      "Everything in Monthly",
      "Unlimited group classes",
      "Personalized diet chart",
      "Monthly progress tracking",
      "Sauna access",
    ],
    featured: true,
    cta: "Go Quarterly",
  },
  {
    name: "Yearly",
    price: "₨ 40,000",
    period: "/year",
    features: [
      "Everything in Quarterly",
      "4 free personal training sessions",
      "2 guest passes every month",
      "IronPulse athlete T-shirt",
      "Priority class booking",
    ],
    featured: false,
    cta: "Commit Yearly",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I walked in at 112 kg, embarrassed to even touch a dumbbell. Seven months later I'm 94 kg and deadlifting double my bodyweight. The trainers here genuinely care.",
    name: "Usman Tariq",
    meta: "Member since 2023 · Bahria Town",
    initials: "UT",
  },
  {
    quote:
      "As a working mom I needed 6 AM classes that actually start on time. IronPulse's Sunrise HIIT changed my life — I'm stronger at 34 than I was at 24.",
    name: "Ayesha Siddiqui",
    meta: "Member since 2024 · DHA Phase 2",
    initials: "AS",
  },
  {
    quote:
      "I've trained in three gyms across Rawalpindi. Nothing touches this place — the equipment, the boxing program, the energy. Worth every rupee.",
    name: "Daniyal Sheikh",
    meta: "Member since 2022 · Bahria Town",
    initials: "DS",
  },
];

const MARQUEE_ITEMS = [
  "No Excuses",
  "Train Like a Beast",
  "Strength",
  "Discipline",
  "HIIT",
  "Boxing",
  "Yoga",
  "Results",
];

/* --------------------------------- icons ---------------------------------- */

function Icon({ d, className = "h-7 w-7" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const ICONS = [
  "M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11", // dumbbell
  "M12 2c1 4-3 5-3 9a5 5 0 0 0 10 0c0-2-1-3-1-3s3 1 3 5a8 8 0 0 1-16 0C5 8 10 6 12 2z", // flame
  "M7 11V7a5 5 0 0 1 10 0v4M7 11h10v3a5 5 0 0 1-10 0v-3zM12 19v2", // boxing glove-ish
  "M12 21c-5 0-8-3-8-8 4 0 6 1 8 3 2-2 4-3 8-3 0 5-3 8-8 8zM12 16v5", // lotus
  "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", // users
  "M12 2C7 7 4 11 4 15a8 8 0 0 0 16 0c0-4-3-8-8-13zM12 22v-6", // nutrition leaf-drop
];

/* ---------------------------------- page ---------------------------------- */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================================ HERO ================================ */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        {/* backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(255,77,0,0.16),transparent),radial-gradient(ellipse_50%_40%_at_20%_85%,rgba(255,45,0,0.1),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-55deg, transparent 0 46px, rgba(255,255,255,0.6) 46px 47px)",
          }}
        />
        <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[22vw] leading-none text-stroke opacity-40 lg:block">
          IP
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-300">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand-500" />
              Bahria Town · Rawalpindi
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[17vw] leading-[0.9] tracking-tight text-white sm:text-[13vw] lg:text-[9.5rem]">
              TRAIN LIKE
              <br />
              <span className="grad-text">A BEAST.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Rawalpindi&apos;s hardest-working gym. 12,000 sq ft of iron, elite
              coaches and programs that forge real strength — no shortcuts, no
              excuses.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_JOIN}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_10px_40px_rgba(255,77,0,0.5)] transition-transform hover:scale-105"
              >
                Join Now
              </a>
              <a
                href="#programs"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-brand-500 hover:text-brand-300"
              >
                View Programs
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="font-display text-2xl text-white">4.9</span> ★★★★★
              </span>
              <span className="h-8 w-px bg-white/10" />
              <span>
                Rated by <strong className="text-zinc-300">2,500+ members</strong>
              </span>
            </div>
          </Reveal>
        </div>

        <a
          href="#programs"
          aria-label="Scroll to programs"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-500 transition-colors hover:text-brand-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8 animate-bounce">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ============================== MARQUEE =============================== */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-coal-900 py-4">
        <div className="flex w-max animate-marquee gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-6 font-display text-2xl uppercase tracking-wide text-zinc-500">
                    {item}
                  </span>
                  <span className="h-2.5 w-2.5 rotate-45 bg-brand-500" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================================ STATS =============================== */}
      <section className="relative bg-coal-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="bg-coal-950">
              <div className="flex flex-col items-center px-6 py-10 text-center">
                <span className="font-display text-5xl text-white sm:text-6xl">
                  {s.value}
                </span>
                <span className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================== PROGRAMS ============================== */}
      <section id="programs" className="scroll-mt-24 bg-coal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Our Arsenal</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-7xl">
              PICK YOUR <span className="grad-text">BATTLE</span>
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Six battle-tested programs, one goal — a stronger you. Every program
              includes coach supervision and a starter assessment.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 120}>
                <div className="lift group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-coal-850 p-8">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl transition-all group-hover:bg-brand-500/25" />
                  <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 text-brand-400 ring-1 ring-brand-500/30">
                    <Icon d={ICONS[i % ICONS.length]} />
                  </div>
                  <span className="mb-3 inline-block rounded-full bg-brand-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-300">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-3xl text-white">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{p.desc}</p>
                  <a
                    href={WHATSAPP_JOIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-400 transition-colors hover:text-brand-300"
                  >
                    Try a free session
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SCHEDULE ============================== */}
      <section className="bg-coal-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Weekly Timetable</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-7xl">
              CLASS <span className="grad-text">SCHEDULE</span>
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Monday to Saturday, coached sessions all day. Sundays are for rest —
              even beasts recover.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.map((d, i) => (
              <Reveal key={d.day} delay={(i % 3) * 100}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-coal-900">
                  <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-4">
                    <h3 className="font-display text-2xl tracking-wide text-white">{d.day}</h3>
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white">
                      {d.classes.length} classes
                    </span>
                  </div>
                  <ul className="divide-y divide-white/5">
                    {d.classes.map((c) => (
                      <li key={c.time + c.name} className="flex items-center justify-between px-6 py-3.5">
                        <span className="font-semibold text-zinc-200">{c.name}</span>
                        <span className="text-sm font-bold tabular-nums text-brand-400">{c.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== TRAINERS ============================== */}
      <section id="trainers" className="scroll-mt-24 bg-coal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">The Coaches</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-7xl">
              TRAINED BY <span className="grad-text">SAVAGES</span>
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Certified, competition-tested coaches who will push you past every
              limit you thought you had.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRAINERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <div className="lift overflow-hidden rounded-2xl border border-white/10 bg-coal-850 text-center">
                  <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${t.gradient}`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-55deg, transparent 0 18px, rgba(0,0,0,0.5) 18px 19px)",
                      }}
                    />
                    <span className="relative font-display text-7xl text-white/95 drop-shadow-lg">
                      {t.initials}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-white">{t.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-brand-400">
                      {t.specialty}
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">{t.exp}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== PRICING ============================== */}
      <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-coal-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(255,77,0,0.12),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Membership</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-7xl">
              PAY FOR <span className="grad-text">PAIN</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              No joining fee. No hidden charges. Pause anytime. Just honest pricing
              for serious training.
            </p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 120} className="h-full">
                <div
                  className={`lift relative flex h-full flex-col rounded-2xl border p-8 ${
                    plan.featured
                      ? "border-brand-500 bg-gradient-to-b from-brand-500/15 to-coal-900 shadow-[0_0_60px_rgba(255,77,0,0.25)]"
                      : "border-white/10 bg-coal-900"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-display text-5xl ${plan.featured ? "grad-text" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-zinc-500">{plan.period}</span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mt-0.5 h-4 w-4 shrink-0 text-brand-400">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_JOIN}&text=${encodeURIComponent(`Hi IronPulse! I want the ${plan.name} plan (${plan.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 rounded-full py-3.5 text-center text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.03] ${
                      plan.featured
                        ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-[0_8px_30px_rgba(255,77,0,0.45)]"
                        : "border border-white/20 text-white hover:border-brand-500 hover:text-brand-300"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-center text-sm text-zinc-500">
              Couples discount 15% · Student discount 10% with valid ID · All plans include a free trial day
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className="bg-coal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Wall of Proof</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-7xl">
              BEASTS <span className="grad-text">SPEAK</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="lift flex h-full flex-col rounded-2xl border border-white/10 bg-coal-850 p-8">
                  <div className="mb-4 text-brand-400" aria-label="5 star rating">
                    {"★★★★★"}
                  </div>
                  <blockquote className="flex-1 leading-relaxed text-zinc-300">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg text-white">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-bold text-white">{t.name}</span>
                      <span className="block text-sm text-zinc-500">{t.meta}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA + CONTACT =========================== */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-coal-950 py-24 sm:py-32">
        <div className="stripes h-3 w-full" />
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Your First Step</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] text-white sm:text-7xl">
                STOP SCROLLING.
                <br />
                <span className="grad-text">START LIFTING.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-zinc-400">
                Your first trial day is free — full gym access plus one coached
                group class. Message us on WhatsApp and we&apos;ll book your slot
                today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_JOIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_10px_40px_rgba(255,77,0,0.5)] transition-transform hover:scale-105"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+923001234567"
                  className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-brand-500 hover:text-brand-300"
                >
                  +92 300 1234567
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/10 bg-coal-900 p-8">
                <h3 className="font-display text-3xl text-white">FIND THE IRON</h3>
                <ul className="mt-6 space-y-5 text-zinc-300">
                  <li className="flex gap-4">
                    <span className="text-brand-400">
                      <Icon d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </span>
                    <span>
                      <strong className="block text-white">Address</strong>
                      Plot 12, Main Boulevard, Bahria Town Phase 4, Rawalpindi, Pakistan
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-400">
                      <Icon d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                    </span>
                    <span>
                      <strong className="block text-white">Phone / WhatsApp</strong>
                      +92 300 1234567
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-400">
                      <Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />
                    </span>
                    <span>
                      <strong className="block text-white">Hours</strong>
                      Mon – Sat: 6:00 AM – 11:00 PM
                      <br />
                      Sunday: Closed (recovery day)
                    </span>
                  </li>
                </ul>
                <div className="mt-8 rounded-xl bg-coal-850 p-5 ring-1 ring-white/10">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    <strong className="text-brand-300">Free trial day:</strong> just
                    bring workout clothes and a water bottle — we handle the rest,
                    including the post-leg-day suffering.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================ FOOTER ============================== */}
      <footer className="border-t border-white/10 bg-coal-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 font-display text-lg text-white">
              IP
            </span>
            <span className="font-display text-xl tracking-wide text-white">
              IRON<span className="grad-text">PULSE</span>
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Programs", href: "#programs" },
              { label: "Trainers", href: "#trainers" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-brand-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center text-xs text-zinc-600">
            © 2026 IronPulse Fitness Studio · Demo website concept crafted by{" "}
            <a
              href="https://akclnt.com"
              target="_blank"
              rel="noopener"
              className="text-zinc-400 underline-offset-2 transition-colors hover:text-brand-400 hover:underline"
            >
              AKCLNT
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
