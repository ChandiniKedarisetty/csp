/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'health-green': '#4CAF50',
        'health-orange': '#FF9800',
        'health-blue': '#2196F3',
        'health-red': '#F44336',
        'health-purple': '#9C27B0',
        'health-yellow': '#FFC107',
      },
    },
  },
  plugins: [],
}

