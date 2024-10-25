export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn", "cva"],
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  jsxBracketSameLine: false,
};
