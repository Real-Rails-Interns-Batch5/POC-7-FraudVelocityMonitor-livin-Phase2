import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rails-bg': '#021827',
        'rails-surface': '#0B1117',
        'rails-accent': '#FBBF24',
        'rails-accent-secondary': '#F59E0B',
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
