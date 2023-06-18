/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-one": "rgb(89, 88, 87)",
        "gray-two": "rgb(140, 137, 135)",
        "gray-bold": "rgb(13, 13, 13)",
        "stone-one": "rgb(242, 236, 233)",
      },
    },
    fontFamily: { 
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}
