// tailwind.config.ts (no changes needed)
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }, // Move exactly half, since we duplicate 2x
        },
        marqueeDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-up": "marqueeUp 20s linear infinite",
        "marquee-down": "marqueeDown 20s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
