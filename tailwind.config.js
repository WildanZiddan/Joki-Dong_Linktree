/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'joki-blue': '#3b82f6',
                'dark-bg': '#0f172a',
            },
        },
    },
    plugins: [],
}