/**
 * Cabeceira Design System — Tailwind config snippet
 *
 * Drop this into your tailwind.config.js (or merge into theme.extend).
 * Pairs with the production cabeceira-site codebase.
 */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#013220",
        accent:  "#F89D93",
        "bg-light": "#FAFAF8",
        "bg-dark":  "#0A120E"
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "12px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "64px"
      },
      boxShadow: {
        "primary-20": "0 20px 30px -10px rgba(1,50,32,0.20)",
        "accent-10":  "0 20px 30px -10px rgba(248,157,147,0.10)"
      }
    }
  }
};
