/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./flowbite.config.ts",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrainsMono", "ui-monospace"],
      },
      colors: {
        primary: "#EE2524",
        "gray-950": "#0c0a09",
        "gray-900": "#1c1917",
        "gray-800": "#292524",
        "gray-700": "#44403c",
        "gray-600": "#57534e",
        "gray-500": "#78716c",
        "gray-400": "#a8a29e",
        "gray-300": "#d6d3d1",
        "gray-200": "#e7e5e4",
        "gray-100": "#f5f5f4",
        "gray-50": "#fafaf9",
      },
      animation: {
        loop: "loop 3s linear infinite",
      },
      backgroundSize: {
        "200%": "200%",
      },
      keyframes: {
        loop: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "-200% 0%" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
