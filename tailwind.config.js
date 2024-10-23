/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "hsl(166, 63%, 50%)",
        border: "hsl(240, 52%, 11%)",
        background: "hsl(210, 67%, 99%)",
        secText: "hsl(240, 10%, 59%)",
        excelGreen: "hsl(137, 62%, 27%)",
        error: "hsl(0, 100%, 40%)",
        pageBg: "hsl(203, 27%, 94%);",
        hoverBg: "hsl(132, 6%, 83%);",
        pnBg: "hsl(208, 100%, 97%)",
        pnBgHover: "hsl(180, 100%, 97%)",
        tableColorDelimitation: "#F2F2F2",
        tableButtons: "#0066B2",
        tableButtonsHover: "#002D62",
        tableWhiteButtonsHover: "#E6E6E6",
      },
      boxShadow: {
        delimitingShadow: "0 20px 30px rgba(161,161,140,0.7)",
      },
    },
  },
  plugins: [],
};
