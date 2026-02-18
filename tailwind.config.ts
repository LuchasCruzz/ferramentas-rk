import type {Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        parchment: '0 8px 30px rgba(0,0,0,.14)'
      }
    }
  },
  plugins: []
} satisfies Config;
