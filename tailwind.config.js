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
        'navy': {
          50: '#F4F4F9',
          100: '#E9E9F0',
          200: '#C7C7D9',
          300: '#A5A5C2',
          400: '#616194',
          500: '#262636',
          600: '#222231',
          700: '#1C1C29',
          800: '#171721',
          900: '#12121A',
        },
        'junya-navy': '#262636',
        'junya-navy-light': '#3D3D52',
        'junya-text': '#333333',
        'junya-gray': '#666666',
        'junya-light': '#F9FAFB',
        'junya-border': '#E5E7EB',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'junya': ['Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
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
            maxWidth: '1200px',
            lineHeight: '2.0',
            h2: {
              borderBottom: '1px solid #C7C7D9',
              paddingBottom: '1rem',
              color: '#262636',
              marginTop: '4rem',
              marginBottom: '2rem',
              fontWeight: '900',
              letterSpacing: '-0.02em',
            },
            a: {
              color: '#262636',
              textDecoration: 'none',
              fontWeight: '700',
              borderBottom: '1px solid #262636',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#616194',
                borderColor: '#616194',
              },
            },
            blockquote: {
              borderLeft: '4px solid #262636',
              backgroundColor: '#F4F4F9',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
            },
            p: {
              marginBottom: '2rem',
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