import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 폴더 포함 (선택 사항)
        "./src/**/*.{css,html}", // Tailwind가 감지해야 할 추가 파일
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
