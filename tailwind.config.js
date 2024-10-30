/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E72D7C",
        secondary: "#108B6F",
        accent: "#FFA500",
        neutral: "#E0E0E0",
        "base-100": "#f3f4f6",
        info: "#2F80ED",
        success: "#3DC13C",
        warning: "#F3BB1B",
        error: "#EB5757",
      },
    },
  },
  plugins: [],
};
