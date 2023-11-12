/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
        darklight: "#212121",
      },
      fontFamily: {
        'poppins': ['poppins', 'sans'],
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  purge: ["./src/**/*.{html,js}", "./public/**/*.html"],
};
