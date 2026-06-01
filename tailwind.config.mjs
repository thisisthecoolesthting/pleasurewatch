import typography from '@tailwindcss/typography';

/** PleasureWatch — zinc editorial + pink accent (ui-ux-pro-max / niche_spec). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#EDE9FE',
        },
        terracotta: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        sage: {
          400: '#D4D4D8',
          500: '#A1A1AA',
          600: '#71717A',
        },
        rose: {
          deep: '#18181B',
        },
        ink: {
          900: '#09090B',
          700: '#3F3F46',
          500: '#71717A',
        },
      },
      fontFamily: {
        display: ['Libre Bodoni', 'Georgia', 'serif'],
        sans: ['Public Sans', 'system-ui', 'sans-serif'],
        body: ['Public Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        site: '72rem',
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(9, 9, 11, 0.05), 0 4px 16px rgba(9, 9, 11, 0.06)',
        'soft-lg': '0 2px 4px rgba(9, 9, 11, 0.06), 0 12px 32px rgba(9, 9, 11, 0.1)',
      },
    },
  },
  plugins: [typography],
};
