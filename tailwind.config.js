/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                application: "var(--application-font)",
            },
            height: {
                navbar: "120px",
            },
            colors: {
                "main-dark-blue": "#0f1c71",
                "main-blue": "#1D31DD",
                "main-amber": "#FFA800",
                "main-orange": "#FF512F",
                "main-rose": "#DD2476",
                "main-gray": "#f0f0f0",
                "main-dark-gray": "#474747",
            },
            backgroundImage: theme => ({
                "orange-rose-gradient": `linear-gradient(to right, ${theme(
                    "colors.main-orange"
                )}, ${theme("colors.main-rose")})`,
                "orange-rose-gradient-reverse": `linear-gradient(to left, ${theme(
                    "colors.main-orange"
                )}, ${theme("colors.main-rose")})`,
                "blue-light-dark": `linear-gradient(to bottom, ${theme(
                    "colors.main-blue"
                )}, ${theme("colors.main-dark-blue")})`,
            }),
        },
    },
    plugins: [],
    darkMode: ["class"],
};
