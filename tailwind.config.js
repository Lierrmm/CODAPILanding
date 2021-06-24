const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    "*/**/*.html",
    "*/**/*.js"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'print': {'raw': 'print'},
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        teal: {
          "50": "#e6f2f2",
          "100": "#cce6e6",
          "150": "#b3d9d9",
          "200": "#99cccc",
          "250": "#80c0c0",
          "300": "#66b3b3",
          "350": "#4da6a6",
          "400": "#339999",
          "450": "#198d8d",
          "500": "#008080",
          "550": "#007373",
          "600": "#006666",
          "650": "#005a5a",
          "700": "#004d4d",
          "750": "#004040",
          "800": "#003333",
          "850": "#002626",
          "900": "#001a1a",
          "950": "#000d0d",
       }
      },
    },
  },
  variants: {
  },
  plugins: [],
}
