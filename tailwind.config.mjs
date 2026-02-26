/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        tip: 'var(--color-tip)',
        info: 'var(--color-info)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  }
};
