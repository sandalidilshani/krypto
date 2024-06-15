import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#000337",
        featurednavcolor: "rgba(99, 89, 177, 0.2)",
        customPurple: "#8C8CDA",
        testColor: "#AAD9D9",
        cardColor: "rgba(65, 65, 194, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
