import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#07090e",
          900: "#0b0f1a",
          800: "#11162a",
          700: "#19203b",
          600: "#222b4b",
        },
        neon: {
          500: "#34f5c5",
          400: "#52ffd5",
        },
        glacier: {
          400: "#8ab7ff",
          300: "#b2ccff",
        },
        ember: {
          500: "#f59e0b",
          400: "#fbbf24",
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(52, 245, 197, 0.25)",
        soft: "0 12px 50px rgba(8, 12, 24, 0.45)",
      },
      backgroundImage: {
        grid:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        aurora:
          "radial-gradient(80% 120% at 20% 10%, rgba(52,245,197,0.18), transparent 60%), radial-gradient(80% 120% at 80% 0%, rgba(138,183,255,0.22), transparent 55%), radial-gradient(120% 120% at 40% 80%, rgba(82,255,213,0.12), transparent 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.65 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        sweep: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(160%)" },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 5s ease-in-out infinite",
        slideUp: "slideUp 0.8s ease-out forwards",
        sweep: "sweep 8s linear infinite"
      },
    },
  },
  plugins: [forms],
};
