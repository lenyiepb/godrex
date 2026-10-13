import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50:  "#E8EDF5",
          100: "#C5D0E3",
          200: "#97AACC",
          300: "#6884B5",
          400: "#3D619E",
          500: "#1E4080",
          600: "#163166",
          700: "#0F2450",
          800: "#0A1628",  // base
          900: "#060D19",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50:  "#FDF8EC",
          100: "#F9EDCC",
          200: "#F0D896",
          300: "#E8C97A",
          400: "#DDBB5C",
          500: "#C9A84C",  // base
          600: "#A8893C",
          700: "#876B2D",
          800: "#654F1F",
          900: "#433412",
        },
        cream: "#F8FAFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-navy":
          "linear-gradient(135deg, #060D19 0%, #0A1628 50%, #112040 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(201,168,76,0.25)",
        "glow-sm": "0 0 15px rgba(201,168,76,0.15)",
        card: "0 4px 24px rgba(10,22,40,0.12)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4)",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse_slow: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.4" },
        },
      },
      animation: {
        ticker:      "ticker 40s linear infinite",
        "ticker-slow": "ticker 60s linear infinite",
        "fade-up":   "fadeUp 0.6s ease-out both",
        shimmer:     "shimmer 2s linear infinite",
        "pulse-slow": "pulse_slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
