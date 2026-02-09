import { useI18n } from "../i18n/I18nProvider.jsx";

export default function LanguageModal() {
  const { isLanguageChosen, setLanguage, t } = useI18n();

  if (isLanguageChosen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/90 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-soft rtl-text">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Language</p>
        <h2 className="mt-3 font-display text-2xl">{t.language.chooseTitle}</h2>
        <p className="mt-3 text-sm text-white/70">{t.language.chooseCopy}</p>
        <div className="mt-6 grid gap-3">
          <button
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-sm text-white/80 transition hover:border-neon-500/60"
            onClick={() => setLanguage("en")}
          >
            {t.language.english}
          </button>
          <button
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-sm text-white/80 transition hover:border-neon-500/60"
            onClick={() => setLanguage("fa")}
          >
            {t.language.persian}
          </button>
        </div>
        <p className="mt-6 text-xs text-white/40">
          {t.language.confirm}
        </p>
      </div>
    </div>
  );
}
