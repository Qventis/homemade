/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        qventis: {
          coral: {
            DEFAULT: '#FF6B6B',
            light: '#FF8E8E',
            dark: '#E85555',
          },
          gray: {
            DEFAULT: '#6B7280',
            light: '#9CA3AF',
            dark: '#4B5563',
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          white: {
            DEFAULT: '#FFFFFF',
            soft: '#FEFEFE',
            warm: '#FAFAFA',
            cool: '#F8FAFC',
          },
          cream: '#FFF8F0',
          'gray-warm': '#F7F7F7',
          'gray-cool': '#E8F4F8',
        },
      },
      backgroundImage: {
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #FFFFFF 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF8F0 0%, #F7F7F7 100%)',
        'gradient-white': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
        'gradient-gray': 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #FEFEFE 0%, #F3F4F6 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
