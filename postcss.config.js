// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ This is mandatory for Tailwind v4+
    autoprefixer: {},
  },
};
