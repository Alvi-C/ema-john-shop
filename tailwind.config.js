/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#42b515",

          "secondary": "#c6c003",

          "accent": "#89c5f9",

          "neutral": "#1C2B35",

          "base-100": "#FFFFFF",

          "info": "#ebedf3",

          "success": "#63DED4",

          "warning": "#FF9900",

          "error": "#FF3030",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
