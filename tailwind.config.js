/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}", // Tentukan file yang ingin dipindai oleh Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ff6347',
        accent: '#6c5ce7',
        customBlue: '#2980b9',
        customGreen: '#2ecc71',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        colorShift: {
          '0%': { backgroundColor: '#3490dc' },
          '50%': { backgroundColor: '#ff6347' },
          '100%': { backgroundColor: '#2980b9' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
        scroll: 'scroll 30s linear infinite',
        colorShift: 'colorShift 5s infinite alternate', // Animasi perpindahan warna
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/gambar8.jpg')",
        'gradient-radial': 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      },
    },
  },
  plugins: [],
}
