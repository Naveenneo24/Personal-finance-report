1.first we have to npm create vite@latest
2.cd "Finance tracker"
  npm install
  npm run dev
3. Install Tailwind Css
- npm install -D tailwindcss
- npx tailwindcss init

4. /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} config in tailwind css


5. for chart we have to install
  - npm i react-chartjs-2 