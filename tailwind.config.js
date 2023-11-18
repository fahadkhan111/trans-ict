/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      contactBg: "url('./assets/images/contact-form-bg.jpg')",
      footerBg: "url('./assets/images/footer-bg.jpg')",
      cardBg: "url('./assets/images/features-bg.png')",
      caseStudiesBg: "url('./assets/images/case-studies-bg.jpg')",
      testimonialBg: "url('./assets/images/bgimg.jpg')"
    },
    extend: {},
  },
  plugins: [],
};
