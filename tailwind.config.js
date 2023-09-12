/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      backgroundImage: {
        pricenetwork: "url('./assets/BondingCurve/PricingNetwork.svg')",
      },
    },
  },
  plugins: [],
};
