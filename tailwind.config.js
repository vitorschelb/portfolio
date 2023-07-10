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
        "stone-white": "rgb(217, 217, 217)",
        "clean-white": "rgb(246, 251, 255)",
      },
      keyframes: {
        grow: {
          "0%": { height: "0", "border-color": "rgb(246, 251, 255)" },
          "100%": { height: "100%", "border-color": "rgb(51, 51, 51)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        grow: "grow 1.5s ease-in-out",
        float: "float 1.5s ease-in-out infinite",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      firacode: ["Fira Code", "monospace"],
    },
    letterSpacing: {
      super: "0.3em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },
  plugins: [],
};
