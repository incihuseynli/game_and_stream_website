/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : 'url("./heroBG.png")',
        'streamers' : 'url("./bgImg1.png")',
        'pageHero' : 'url("./bgHero.jpg")',
        'streamer' : "url('./bgStreamer.jpg')",
      },
      gridTemplateColumns: {
        'browse' : '700px 400px',
      },
      colors: {
        "primary-green-300": "#45f983",
        "primary-green-500": "#3fde77",
        "primary-green-800": "#215a3f",
        "secondary-yellow-500": "#ffbf19",
        "black-500": "#0a0f13",
        "black-800": "#151d25",
        "gray-50": "#dde0e4",
        "gray-400": "#9fb1b7",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        playpen: ["Playpen Sans", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
