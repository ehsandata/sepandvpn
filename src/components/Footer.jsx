import { useI18n } from "../i18n/I18nProvider.jsx";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-ink-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg">{t.common.brand}</p>
          <p className="text-xs text-white/60">{t.common.footerTagline}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-white/60">
          <span>{t.common.footerPrivacy}</span>
          <span>{t.common.footerStatus}</span>
          <span>{t.common.footerDocs}</span>
          <span>{t.common.footerContact}</span>
        </div>
      </div>
    </footer>
  );
}
