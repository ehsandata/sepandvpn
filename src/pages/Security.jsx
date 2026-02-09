import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function Security() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 grid-overlay bg-grid opacity-20" />
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-neon-500/20 blur-[140px] animate-glow" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-glacier-400/20 blur-[120px] animate-glow" />

        <Navbar />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rtl-text" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              {t.security.badge}
            </span>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              {t.security.title}
            </h1>
            <p className="text-white/70 md:text-lg">{t.security.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition hover:translate-y-[-2px]">
                {t.security.ctaPrimary}
              </button>
              <Link
                to="/"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/60"
              >
                {t.security.ctaSecondary}
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-6">
              {t.security.compliance.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl text-neon-400">{item.label}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rtl-text" data-aos="fade-left">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            <div className="relative rounded-3xl border border-white/10 bg-ink-900/80 p-8 shadow-soft">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{t.security.threatConsole.title}</span>
                <span className="text-ember-400">{t.security.threatConsole.status}</span>
              </div>
              <div className="mt-6 grid gap-4">
                {t.security.controls.items.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-ink-950/60 p-4">
                    <p className="text-sm text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-ink-950 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {t.security.threatConsole.liveEvents}
                </p>
                <div className="mt-4 space-y-3 text-xs text-white/60">
                  {t.security.threatConsole.events.map((event) => (
                    <div key={event.label} className="flex items-center justify-between">
                      <span>{event.label}</span>
                      <span className="text-white">{event.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div data-aos="fade-up" className="rtl-text">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.security.safeguards.label}</p>
              <h2 className="mt-4 font-display text-3xl">{t.security.safeguards.title}</h2>
              <p className="mt-4 text-white/70">{t.security.safeguards.copy}</p>
              <div className="mt-8 space-y-4">
                {t.security.safeguards.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="rtl-text">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.security.controls.label}</p>
              <h3 className="mt-4 font-display text-2xl">{t.security.controls.title}</h3>
              <div className="mt-6 grid gap-3">
                {t.security.controls.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 rtl-reverse">
                    <span className="h-2 w-2 rounded-full bg-neon-500" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-white/10 bg-ink-900/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.security.complianceLabel}</p>
                <p className="mt-3 text-sm text-white/70">{t.security.complianceBlock}</p>
                <div className="mt-5 flex flex-wrap gap-4">
                  {t.security.compliance.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-white/60">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 rtl-text" data-aos="fade-up">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10 p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.security.action.label}</p>
                <h2 className="mt-4 font-display text-3xl">{t.security.action.title}</h2>
                <p className="mt-4 text-white/70">{t.security.action.copy}</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  className="w-full rounded-full border border-white/15 bg-ink-950/70 px-5 py-3 text-sm text-white placeholder:text-white/40"
                  placeholder={t.common.workEmail}
                />
                <button className="rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow">
                  {t.common.requestAssessment}
                </button>
                <p className="text-xs text-white/50">{t.common.responseTime}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
