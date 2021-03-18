module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sniglet: ["Sniglet"],
      },
      colors: {
        "chatbox-pink": "var(--color-accent)",
        "chatbox-bg-dark": "var(--color-bg-dark)",
        "chatbox-bg-light": "var(--color-bg-light)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
