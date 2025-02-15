import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class",
  plugins: [react(), tailwindcss(),],
  
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure you include your file paths here
  ],
  theme: {
    extend: {},
  },
});
