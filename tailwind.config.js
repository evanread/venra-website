/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '800',
              fontSize: theme('fontSize.3xl[0]'),
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontSize: theme('fontSize.2xl[0]'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontSize: theme('fontSize.xl[0]'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            p: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
              lineHeight: '1.75',
            },
            ul: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
            },
            li: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.4'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            code: {
              color: theme('colors.blue.600'),
              backgroundColor: theme('colors.blue.50'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontSize: '0.9em',
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.200'),
              backgroundColor: theme('colors.blue.50'),
              padding: theme('spacing.4'),
              fontStyle: 'normal',
              color: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};