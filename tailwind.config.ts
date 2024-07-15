import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   khand: ["Khand Medium", "sans-serif"],
      // },
      colors: {
        primary: "#6BB252",
        green_200: "#7ec662",
        green_50: "#DDF6D5",

        black_300: "#333333",
        black_200: "#131313",
        black_100: "#434343",

        gray_700: "#777777",
        gray_600: "#A5A5A5",
        gray_500: "#555555",
        gray_400: "#787878",
        gray_300: "#747474",

        yellow: "#FFC43F",
      },

      spacing: {
        "12": "3rem",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
