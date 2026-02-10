import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function Home() {
  const { t, dir, language } = useI18n();
  const [routeIndex, setRouteIndex] = useState(0);
  const [now, setNow] = useState(new Date());
  const routes = t.home.liveRoutes || [];
  const platforms = [
    {
      id: "android",
      label: t.home.securityStack.stack[0],
      href: "#android",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.5 6.5 5.8 3.8a.6.6 0 0 1 1-.6l1.8 2.9a6.7 6.7 0 0 1 6.8 0l1.8-2.9a.6.6 0 0 1 1 .6l-1.7 2.7A6.4 6.4 0 0 1 19 11v7.1a1.4 1.4 0 0 1-2.8 0V13h-1.4v5.1a1.4 1.4 0 0 1-2.8 0V13h-1.4v5.1a1.4 1.4 0 0 1-2.8 0V11a6.4 6.4 0 0 1 2.2-4.5ZM7 9.5a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm10 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
          />
        </svg>
      ),
    },
    {
      id: "ios",
      label: t.home.securityStack.stack[1],
      href: "#ios",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.7 13.6c0 2.4 2.1 3.2 2.1 3.2s-1.6 4.6-3.8 4.6c-1 0-1.8-.7-2.8-.7s-2 .7-3 .7c-2.1.1-4.1-4-4.1-7 0-3 1.9-4.6 3.7-4.7 1-.1 2 .8 2.7.8.7 0 1.8-.9 3.1-.8.6 0 2.4.2 3.5 2-2.9 1.7-2.4 5.9.6 6.9Zm-2.5-9c.5-.6.8-1.5.7-2.4-.7 0-1.6.5-2.1 1.1-.5.6-.9 1.5-.7 2.4.8.1 1.6-.4 2.1-1.1Z"
          />
        </svg>
      ),
    },
    {
      id: "macos",
      label: t.home.securityStack.stack[2],
      href: "#macos",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16h-3v1.5h2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h2V16h-3A2.5 2.5 0 0 1 5 13.5v-7Zm2.5-.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-9Z"
          />
        </svg>
      ),
    },
    {
      id: "windows",
      label: t.home.securityStack.stack[3],
      href: "#windows",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 5.2 11 4v7H3V5.2Zm0 13.6V13h8v7l-8-1.2Zm10-6.6h8v7l-8-1.2v-5.8Zm0-8.8 8-1.2v7.8h-8V3.4Z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (routes.length <= 1) return;
    const id = setInterval(() => {
      setRouteIndex((prev) => (prev + 1) % routes.length);
    }, 2800);
    return () => clearInterval(id);
  }, [routes.length]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const activeRoute = routes[routeIndex] || {
    route: t.home.liveCard.routeValue,
    ms: 18,
  };
  const displayRoute =
    dir === "rtl" ? activeRoute.route.replaceAll("→", "←") : activeRoute.route;

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 grid-overlay bg-grid opacity-20" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-neon-500/20 blur-[120px] animate-glow" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-glacier-400/20 blur-[140px] animate-glow" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rtl-text" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              {t.home.badge}
            </span>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              {t.home.title}
            </h1>
            <p className="text-white/70 md:text-lg">{t.home.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition hover:translate-y-[-2px]">
                {t.common.ctaTrial}
              </button>
              <Link
                to="/download"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/60"
              >
                {t.common.ctaNetwork}
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-6">
              {t.home.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl text-neon-400">{item.label}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -left-10 top-6 h-40 w-40 animate-float rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg" />
            <div className="absolute -right-6 bottom-6 h-32 w-32 animate-float rounded-full border border-white/10 bg-glacier-400/10 blur-[1px]" />
            <div className="relative rounded-3xl border border-white/10 bg-ink-800/80 p-6 shadow-soft">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{t.home.liveCard.title}</span>
                <span>{t.home.liveCard.status}</span>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-ink-900 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">{t.home.liveCard.routeLabel}</p>
                    <p key={routeIndex} className="font-display text-lg animate-slideUp">
                      {displayRoute}
                    </p>
                  </div>
                  <div className="rounded-full bg-neon-500/10 px-3 py-1 text-xs text-neon-400">
                    {activeRoute.ms} {t.common.ms}
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-xs text-white/60">
                  <div className="flex items-center justify-between">
                    <span>{t.home.liveCard.encryption}</span>
                    <span className="text-white">AES-256-GCM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t.home.liveCard.handshake}</span>
                    <span className="text-white">TLS 1.3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t.home.liveCard.integrity}</span>
                    <span className="text-white">ECDSA-384</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {t.home.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                  >
                    <p className="text-xs text-white/60">{pillar.title}</p>
                    <p className="text-sm text-white">{pillar.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] rtl-swap">
            <div data-aos="fade-up" className="rtl-text rtl-first">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {t.home.securityStack.label}
              </p>
              <h2 className="mt-4 font-display text-3xl">{t.home.securityStack.title}</h2>
              <p className="mt-4 text-white/70">{t.home.securityStack.copy}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {platforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.href}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white/80 transition hover:border-neon-500/60 rtl-reverse"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-neon-500/10 text-neon-400">
                      {platform.icon}
                    </span>
                    <span>{platform.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="relative rtl-text rtl-second" data-aos="fade-left">
              <div className="relative rounded-3xl border border-white/10 bg-ink-900/70 p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  {t.home.securityStack.networkLabel}
                </p>
                <h3 className="mt-3 font-display text-2xl">{t.home.securityStack.networkTitle}</h3>
                <div className="mt-6 rounded-2xl border border-white/10 bg-ink-950 p-6">
                  <svg viewBox="0 0 480 220" className="h-full w-full">
                    <defs>
                      <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#52ffd5" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8ab7ff" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <rect width="480" height="220" fill="#0b0f1a" rx="18" />
                    <path
                      d="M40 160 C120 80, 220 100, 300 50 C350 20, 420 40, 450 80"
                      stroke="url(#line)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {[
                      [80, 140],
                      [160, 90],
                      [230, 110],
                      [310, 65],
                      [380, 50],
                      [420, 90],
                    ].map(([x, y], idx) => (
                      <g key={idx}>
                        <circle cx={x} cy={y} r="6" fill="#34f5c5" opacity="0.7" />
                        <circle cx={x} cy={y} r="12" fill="#34f5c5" opacity="0.2" />
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-neon-500" />
                  <span>{t.common.serverStatus}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">
                    {now.toLocaleString(language === "fa" ? "fa-IR" : "en-US")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 rtl-text" data-aos="fade-up">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.home.technology.label}</p>
              <h2 className="mt-4 font-display text-3xl">{t.home.technology.title}</h2>
            </div>
            <button className="rounded-full border border-white/20 px-6 py-2 text-sm text-white/80 hover:border-neon-500/60">
              {t.common.ctaWhitepaper}
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.home.technology.items.map((item, index) => (
              <div
                key={item.title}
                className="glass-panel p-6"
                data-aos="zoom-in"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-neon-500/15">
                    <span className="font-display text-neon-400">0{index + 1}</span>
                  </div>
                  <p className="font-display text-xl">{item.title}</p>
                </div>
                <p className="mt-4 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="relative overflow-hidden bg-ink-900/60 rtl-text" data-aos="fade-up">
          <div className="absolute inset-0 bg-aurora opacity-60" />
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.home.pricing.label}</p>
              <h2 className="mt-4 font-display text-3xl">{t.home.pricing.title}</h2>
              <p className="mt-4 text-white/70">{t.home.pricing.copy}</p>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
                {t.home.pricing.monthly}
              </div>
              <div className="rounded-full border border-neon-500/40 bg-neon-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-neon-400">
                {t.home.pricing.annual}
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
            {t.home.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 shadow-soft ${
                  plan.highlighted
                    ? "border-neon-500/60 bg-ink-900/80"
                    : "border-white/10 bg-ink-950/60"
                }`}
                data-aos="flip-up"
              >
                <p className="text-sm text-white/60">{plan.name}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-3xl">{plan.price}</span>
                  <span className="text-xs text-white/60">{t.common.perMonth}</span>
                </div>
                <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                <div className="mt-6 space-y-2 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 rtl-reverse">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-neon-500/60">
                  {t.common.choosePlan}
                </button>
              </div>
            ))}
          </div>
        </section>

        

        <section className="mx-auto max-w-6xl px-6 pb-24 rtl-text" data-aos="fade-up">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.home.faq.label}</p>
              <h2 className="mt-4 font-display text-3xl">{t.home.faq.title}</h2>
              <p className="mt-4 text-white/70">{t.home.faq.copy}</p>
              <button className="mt-6 rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow">
                {t.common.scheduleCall}
              </button>
            </div>
            <div className="space-y-4">
              {t.home.faq.items.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
                  <p className="text-sm font-semibold text-white">{item.q}</p>
                  <p className="mt-3 text-sm text-white/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
