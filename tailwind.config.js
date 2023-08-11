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
                "main-amber": "#FFA800",
                "main-orange": "#FF512F",
                "main-rose": "#DD2476",
            },
            backgroundImage: theme => ({
                "orange-rose-gradient": `linear-gradient(to right, ${theme(
                    "colors.main-orange"
                )}, ${theme("colors.main-rose")})`,
            }),
        },
    },
    plugins: [],
    darkMode: ["class"],
};
