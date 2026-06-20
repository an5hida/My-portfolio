/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
        glassBorder: 'rgba(255, 255, 255, 0.18)',
        accent: '#CEE0F9',
        accentBlue: '#A8C8F8',
        secondary: '#D9D9D9',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 40px 0 rgba(206, 224, 249, 0.35)',
        glowBlue: '0 0 60px 0 rgba(168, 200, 248, 0.4)',
      },
      backdropBlur: {
        glass: '10px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-text': 'gradientText 6s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
