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
        // JUNYA ISHIHARA Luxury Training カラーパレット
        'junya-gold': '#F59E0B',
        'junya-gold-dark': '#D97706',
        'junya-gold-darker': '#92400E',
        'junya-amber': '#FBBF24',
        'junya-orange': '#F59E0B', // 互換性のために追加
        'junya-text': '#333333',
        'junya-gray': '#666666',
        'junya-light': '#F8F9FA',
        'junya-border': '#E5E5E5',
        'junya-white': '#FFFFFF',
        'junya-black': '#000000',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'junya': ['Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
        sans: ['Inter', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      borderRadius: {
        'junya': '8px',
        'junya-lg': '12px',
        'junya-xl': '16px',
      },
      boxShadow: {
        'junya-card': '0 2px 8px rgba(0,0,0,0.1)',
        'junya-card-hover': '0 4px 16px rgba(0,0,0,0.15)',
        'junya-header': '0 1px 3px rgba(0,0,0,0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'junya-content': '1200px',
        'junya-article': '800px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'squat': 'squat 2s ease-in-out infinite',
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
        squat: {
          '0%': { transform: 'scaleY(1) translateY(0)' },
          '25%': { transform: 'scaleY(0.9) translateY(2px)' },
          '50%': { transform: 'scaleY(0.8) translateY(4px)' },
          '75%': { transform: 'scaleY(0.9) translateY(2px)' },
          '100%': { transform: 'scaleY(1) translateY(0)' },
        },
        shine: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            maxWidth: '800px',
            lineHeight: '1.8',
            h1: {
              color: '#333333',
              fontWeight: '700',
              fontSize: '2.25rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#333333',
              fontWeight: '600',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid #E49B3F',
            },
            h3: {
              color: '#333333',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1.25rem',
            },
            a: {
              color: '#E49B3F',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeft: '4px solid #E49B3F',
              backgroundColor: '#F8F9FA',
              padding: '1rem 1.5rem',
              fontStyle: 'italic',
              marginLeft: '0',
              marginRight: '0',
            },
            code: {
              backgroundColor: '#F8F9FA',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#F8F9FA',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              padding: '1rem',
            },
            ul: {
              paddingLeft: '1.5rem',
              li: {
                marginBottom: '0.5rem',
                '&::marker': {
                  color: '#E49B3F',
                },
              },
            },
            ol: {
              paddingLeft: '1.5rem',
              li: {
                marginBottom: '0.5rem',
                '&::marker': {
                  color: '#E49B3F',
                  fontWeight: '600',
                },
              },
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