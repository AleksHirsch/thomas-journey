import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "0 2px 10px rgba(0, 0, 0, 1)",
        },
      });
    }),
  ],
};
export default config;
