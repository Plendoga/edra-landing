import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#4AABB5",
          hover:   "#3C9AA4",
          50:      "#F0F9FA",
          100:     "#D6EFF1",
          200:     "#ADDFE4",
          300:     "#7FCBD2",
          400:     "#4AABB5",
          500:     "#3C9AA4",
          600:     "#2E7880",
        },
        edra: {
          bg:      "#FAFAF8",
          bgAlt:   "#F4F3F1",
          fg:      "#1E1D1B",
          fgMuted: "#7A7873",
          card:    "#FFFFFF",
          border:  "#ECEAE8",
          silver:  "#AEAEAE",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:  "0 4px 20px rgba(30,29,27,0.08)",
        hover: "0 12px 40px rgba(30,29,27,0.14)",
        hero:  "0 24px 60px rgba(30,29,27,0.16)",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(40px)"  }, to: { opacity: "1", transform: "none" } },
        fadeRight: { from: { opacity: "0", transform: "translateX(-48px)" }, to: { opacity: "1", transform: "none" } },
        fadeIn:    { from: { opacity: "0" },                                    to: { opacity: "1" } },
        scaleUp:   { from: { opacity: "0", transform: "scale(0.88)"       }, to: { opacity: "1", transform: "scale(1)" } },
      },
      animation: {
        "fade-up":    "fadeUp    0.75s cubic-bezier(.22,1,.36,1) both",
        "fade-right": "fadeRight 0.65s cubic-bezier(.22,1,.36,1) both",
        "fade-in":    "fadeIn    0.7s  ease both",
        "scale-up":   "scaleUp   0.65s cubic-bezier(.34,1.56,.64,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
