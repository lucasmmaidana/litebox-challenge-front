import type {Config} from "tailwindcss"

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#9C73F7",
        green: "#D8F34E",
        blackish: "#240F35",
        "dark-gray": "#595959",
        "light-gray": "#8C8C8C",
      },
      height: {
        "94.5": "23.625rem",
        "122": "30.5rem",
        "138.5": "34.625rem",
        "169.25": "42.3125rem",
      },
      minHeight: {
        "122": "30.5rem",
      },
      width: {
        "139.25": "34.8125rem",
      },
      maxWidth: {
        "360": "90rem",
      },
    },
  },
  plugins: [],
} satisfies Config
