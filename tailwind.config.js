/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: "#0a0f2b",
          panel: "#11183d",
          electric: "#36d1ff",
          lime: "#7eff00",
          pink: "#ff2bd6",
          yellow: "#ffe84d"
        }
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "'Courier New'", "monospace"],
        terminal: ["VT323", "'Courier New'", "monospace"]
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        screenFlicker: {
          "0%": { opacity: "0.95" },
          "50%": { opacity: "0.88" },
          "100%": { opacity: "0.98" }
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        bootFade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        }
      },
      animation: {
        blink: "blink 1s step-end infinite",
        flicker: "screenFlicker 260ms infinite",
        "spin-slow": "spinSlow 4s linear infinite",
        marquee: "marquee 24s linear infinite",
        "boot-fade": "bootFade 600ms ease forwards"
      },
      boxShadow: {
        bevel: "inset 1px 1px 0 #f7f7f7, inset -1px -1px 0 #5a5a5a",
        "bevel-pressed": "inset -1px -1px 0 #f7f7f7, inset 1px 1px 0 #5a5a5a"
      }
    }
  },
  plugins: []
};
