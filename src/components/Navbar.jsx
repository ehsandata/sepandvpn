import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider.jsx";

const navLinkClasses = ({ isActive }) =>
  [
    "text-sm transition",
    isActive ? "text-white" : "text-white/60 hover:text-white",
  ].join(" ");

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  return (
    <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-neon-500/40 bg-neon-500/20">
          <span className="font-display text-lg text-neon-400">S</span>
        </div>
        <div>
          <p className="font-display text-lg">{t.common.brand}</p>
          <p className="text-xs text-white/60">{t.common.brandTagline}</p>
        </div>
      </Link>
      <div className="hidden items-center gap-6 md:flex">
        <NavLink to="/" className={navLinkClasses}>
          {t.common.navServers}
        </NavLink>
        <NavLink to="/security" className={navLinkClasses}>
          {t.common.navSecurity}
        </NavLink>
        <span className="text-sm text-white/60">{t.common.navTechnology}</span>
        <span className="text-sm text-white/60">{t.common.navPricing}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1">
          <button
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition ${
              language === "en" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
            }`}
            onClick={() => setLanguage("en")}
            aria-label="English"
          >
            <span className="grid h-4 w-6 overflow-hidden rounded-sm border border-white/20">
              <svg viewBox="0 0 60 40" className="h-full w-full">
                <rect width="60" height="40" fill="#0b3d91" />
                <rect y="16" width="60" height="8" fill="#ffffff" />
                <rect x="26" width="8" height="40" fill="#ffffff" />
              </svg>
            </span>
            EN
          </button>
          <button
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition ${
              language === "fa" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
            }`}
            onClick={() => setLanguage("fa")}
            aria-label="Persian"
          >
            <span className="grid h-4 w-6 overflow-hidden rounded-sm border border-white/20">
              <svg viewBox="0 0 60 40" className="h-full w-full">
                <rect width="60" height="40" fill="#239f40" />
                <rect y="13.3" width="60" height="13.3" fill="#ffffff" />
                <rect y="26.6" width="60" height="13.4" fill="#da0000" />
              </svg>
            </span>
            FA
          </button>
        </div>
        <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:border-neon-500/60 hover:text-white">
          {t.common.ctaAccess}
        </button>
      </div>
    </nav>
  );
}
