import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{css,html}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1ed760",
                secondary: "#ffffff",
                background: {
                    default: "#000000",
                    paper: "#121212",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#b3b3b3",
                },
                action: {
                    hover: "#282828",
                    active: "#333333",
                },
            },
            fontFamily: {
                sans: ["Roboto", "Arial", "sans-serif"],
            },
            fontSize: {
                h1: "24px",
                h2: "1rem",
                body1: "14px",
                subtitle1: "0.6875rem",
            },
            borderRadius: {
                lg: "30px",
            },
            spacing: {
                buttonPaddingY: "8px",
                buttonPaddingX: "32px",
            },
            fontWeight: {
                bold: 700,
            },
        },
    },
    plugins: [],
};

export default config;
