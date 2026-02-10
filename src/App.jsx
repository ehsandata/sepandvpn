import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Security from "./pages/Security.jsx";
import { useI18n } from "./i18n/I18nProvider.jsx";

export default function App() {
  const { dir } = useI18n();

  return (
    <div dir={dir} className={dir === "rtl" ? "rtl" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Security />} />
      </Routes>
    </div>
  );
}
