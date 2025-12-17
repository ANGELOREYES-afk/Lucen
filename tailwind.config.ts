// tailwind.config.ts (no changes needed)
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'siri-wave': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '0.6',
          },
          '100%': { 
            transform: 'scale(2.5)',
            opacity: '0',
          },
        },
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
        gradientSpin: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'radar-sweep': {
          '0%': { 
            transform: 'rotate(0deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'rotate(360deg)',
            opacity: '1',
          },
        },
        'radar-ping': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': { 
            transform: 'scale(1.5)',
            opacity: '0.5',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        'radar-sweep': 'radar-sweep 3s linear infinite',
        'radar-ping': 'radar-ping 2s ease-out infinite',
        'siri-wave': 'siri-wave 2s ease-out infinite',
        "marquee-up": "marqueeUp 20s linear infinite",
        "marquee-down": "marqueeDown 20s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
        gradientSpin: 'gradientSpin 8s ease infinite alternate', // Adjust duration and easing as needed
      },
    },
  },
  plugins: [],
};
export default config;
