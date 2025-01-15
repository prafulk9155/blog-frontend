/** @type {import('tailwindcss').Config} */

const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

function addVariablesForColors({ addBase, theme }) {
  const colors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [`--${key}`, value])
  );
  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
