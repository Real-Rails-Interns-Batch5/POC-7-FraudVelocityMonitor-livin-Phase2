import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rails-bg': '#030712',
        'rails-surface': '#0B1117',
        'rails-accent': '#38BDF8',
        'rails-accent-secondary': '#818CF8',
        'rails-border': '#1F2937',
      },
      spacing: {
        'sidebar-width': '30%',
        'main-width': '70%',
      },
    },
  },
  plugins: [],
}
export default config
