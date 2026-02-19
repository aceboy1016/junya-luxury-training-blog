/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        'junya-gold': '#F59E0B',
        'junya-gold-dark': '#D97706',
        'junya-gold-darker': '#92400E',
        'junya-amber': '#FBBF24',
        'junya-orange': '#F59E0B',
        'junya-text': '#333333',
        'junya-gray': '#666666',
        'junya-light': '#F8F9FA',
        'junya-border': '#E5E5E5',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'junya': ['Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
        sans: ['Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
      },
      maxWidth: {
        'junya-content': '1200px',
        'junya-article': '800px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            maxWidth: '800px',
            lineHeight: '1.8',
            h2: {
              borderBottom: '2px solid #F59E0B',
              paddingBottom: '0.5rem',
            },
            a: {
              color: '#F59E0B',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            blockquote: {
              borderLeft: '4px solid #F59E0B',
              backgroundColor: '#F8F9FA',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}