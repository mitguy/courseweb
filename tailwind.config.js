/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "white": "#ffffff",
      "yellow": "#ffbf00",
      "red": "ff0000",
    },
    extend: {
      width: {
        "128": "32rem",
        "256": "64rem",
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#ffbf00",
      },
    },
  },
  plugins: [],
}