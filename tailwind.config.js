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
      "red": "#ff0000",
    },
    extend: {
      textColor: {
        "red": "#ff0000",
      },
      width: {
        "wp": "1248px",
        "wc": "672px",
        "wcb": "670px",
        "96": "24rem",
        "128": "32rem",
        "192": "48rem",
        "256": "64rem",
        "384": "96rem",
      },
      height: {
        "96": "24rem",
        "128": "32rem",
        "256": "64rem",
        "384": "96rem",
        "hp": "702px",
        "hc": "863px",
        "hcb": "735px",
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#ffbf00",
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
}