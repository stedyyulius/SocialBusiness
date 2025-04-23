const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Segoe UI Emoji"', 'system-ui', 'sans-serif'],
          },
        },
      }
    },
  },
};

export default config;
