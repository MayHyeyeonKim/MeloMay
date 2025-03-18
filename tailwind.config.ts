import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}", // 기존 경로 유지
        "./src/components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 폴더 직접 지정
        "./src/layouts/**/*.{js,ts,jsx,tsx}", // 레이아웃 폴더 직접 지정
        "./src/pages/**/*.{js,ts,jsx,tsx}" // 페이지 폴더 직접 지정
    ],
    darkMode: "media", // 시스템 다크 모드 감지
    theme: {
        screens: {
            sm: "640px",  // 작은 화면 (모바일)
            md: "768px",  // 태블릿
            lg: "1024px", // 작은 데스크탑
            xl: "1280px", // 큰 데스크탑
            "2xl": "1536px", // 초대형 화면
        },
        extend: {
            colors: {
                primary: "#1ed760",
                secondary: "#ffffff",
                "bg-default": "#000000",
                "bg-paper": "#121212",
                "text-primary-custom": "#ffffff",
                "text-secondary-custom": "#b3b3b3",
                "hover-action": "#282828",
                "active-action": "#333333",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            fontSize: {
                xl: "24px",
                lg: "1rem",
                base: "14px",
                sm: "0.6875rem",
            },
            borderRadius: {
                lg: "30px",
                xl: "40px",
            },
            spacing: {
                "btn-x": "32px",
                "btn-y": "8px",
            },
        },
    },
    // plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config; 
