import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0D0F",
        canvas: "#F8F7F5",
        signal: "#ED312B",
      },
    },
  },
  plugins: [],
};

export default config;
