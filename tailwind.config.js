/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      colors: {
        primeOrange: {
          100: '#ff7500',
          900: '#2b1400'
        },
        primePurple: {
          50: '#7100ff',
          100: '#440099',
          900: '#120029'
        }
      }
    },
  },
  plugins: [],
}

