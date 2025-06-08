import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "sm-mobile": { max: "766px" }, // 작은 모바일 (766px 이하)
      mobile: "767px", // 모바일 (767px 이상)
      tablet: "990px", // 태블릿 (990px 이상)
      laptop: "1200px", // 노트북 (1200px 이상)
      desktop: "1600px", // 데스크탑 (1400px 이상)
    },
    extend: {
      fontSize: {
        sm: "var(--font-size)", // 기존 sm 값 유지
        md: "calc(var(--font-size) + 4px)", // 중간 크기
        lg: "calc(var(--font-size) + 8px)", // 큰 크기
        xs: "calc(var(--font-size) - 4px)", // 가장 작은 사이즈 추가
        xxs: "calc(var(--font-size) - 8px)", // 가장 작은 사이즈 추가
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [tailwindcssAnimate, tailwindTypography],
} satisfies Config;
