/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: ["light", "dark", "synthwave"],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
