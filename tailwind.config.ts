import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: "var(--font-paytone-one)",
      roboto: "var(--font-roboto)",
    },
    backgroundImage: {
      hero: "url('/img/hero/fuffy_hero_wide.jpg')",
    },
    extend: {
      colors: {
        primary: "#6750a4",
        on_primary: "#ffffff",
        primary_container: "#e9ddff",
        on_primary_container: "#22005d",
        secondary: "#625b71",
        on_secondary: "#ffffff",
        secondary_container: "#e8def8",
        on_secondary_container: "#1e192b",
        tertiary: "#7e5260",
        on_tertiary: "#ffffff",
        tertiary_container: "#ffd9e3",
        on_tertiary_container: "#31101d",
        error: "#ba1a1a",
        error_container: "#ffdad6",
        on_error: "#ffffff",
        on_error_container: "#410002",
        background: "#fffbff",
        on_background: "#1c1b1e",
        surface: "#fffbff",
        on_surface: "#1c1b1e",
        surface_variant: "#e7e0eb",
        on_surface_variant: "#49454e",
        outline: "#7a757f",
        inverse_on_surface: "#f4eff4",
        inverse_surface: "#313033",
        inverse_primary: "#cfbcff",
        shadow: "#000000",
        surface_tint: "#6750a4",
        outline_variant: "#cac4cf",
        scrim: "#000000",
      },
    },
  },
  plugins: [],
}
export default config
