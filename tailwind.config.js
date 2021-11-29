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
            },
            backgroundColor: {
                'blue-gray': '#e4e9f1'
            },
            borderColor: {
                'light-blue': '#f8f9fb'
            },
            borderWidth: {
                '3': '3px',
            },
            width: {
                '1.25': '0.313rem'
            },
            inset: {
                '15': '3.813rem'
            },
            animation: {
                'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
