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
        "gray-950": "#09090b",
        "gray-900": "#18181b",
        "gray-800": "#27272a",
        "gray-700": "#3f3f46",
        "gray-600": "#52525b",
        "gray-500": "#71717a",
        "gray-400": "#a1a1aa",
        "gray-300": "#d4d4d8",
        "gray-200": "#e4e4e7",
        "gray-100": "#f4f4f5",
        "gray-50": "#fafafa",
      },
      animation: {
        loop: "loop 3s linear infinite",
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
