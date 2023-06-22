/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-zero": "rgb(125, 119, 137)",
        "gray-one": "rgb(89, 88, 87)",
        "gray-two": "rgb(140, 137, 135)",
        "gray-three": "rgb(51, 51, 51)",
        "gray-bold": "rgb(13, 13, 13)",
        "stone-one": "rgb(242, 236, 233)",
        "clean-white": "rgb(246, 251, 255)",
      },
      keyframes: {
        grow: {
          "0%": { "height": "0", "border-color": "rgb(246, 251, 255)" },
          "100%": { "height": "100%", "border-color": "rgb(51, 51, 51)"},

        },
      },
      animation: {
        grow: "grow 1.5s ease-in-out",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    letterSpacing: {
      super: "0.3em",
    }
  },
  plugins: [],
};
