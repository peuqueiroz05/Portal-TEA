/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}", // <- adiciona todos os arquivos do React e SCSS
  ],
  theme: {
    extend: {
      colors: {
        azulSuave: "#a8c5ff",
        lilasSuave: "#cdb4ff",
      },
    },
  },
  plugins: [],
}
