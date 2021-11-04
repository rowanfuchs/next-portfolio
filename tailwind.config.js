module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                120: '30rem',
            },
            zIndex: {
                '-1': '-1',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
