module.exports = {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './resources/**/*.vue',
      './resources/**/*.svg',
      './content/**/*.md'
    ],
    safelist: [
        '!-translate-y-full',
        '!stroke-white',
        'justify-between',
        'order-first',
        'order-last',
        'md:!order-first',
        'md:!order-last',
        'md:order-first',
        'md:order-last',
        'lg:order-first',
        'lg:order-last',
        'place-content-between',
        '[animation-delay:0.02s]',
        '[animation-delay:0.04s]',
        'md:!bg-orange',
        'md:!bg-green',
        'md:!bg-pink',
        '!opacity-0',
        '!translate-y-[100%]',
        'translate-y-0'
    ],
    theme: {
        debugScreens: {
            position: ['bottom', 'right'],
        },
        fontFamily: {
            'sans': ['Helvetica Now', 'Arial', 'sans-serif'],
        },
        colors: {
            'transparent' : 'transparent',
            'primary'     : 'black',
            'accent'      : '#E44138',
            'success'     : 'black',
            'error'       : '#E44138',
            'white'       : 'white',
            'black'       : 'black',
            'grey'        : '#737373',
            'pink'    : {
                DEFAULT:    '#F7D6EB',
                dark:       '#5B0008',
            },
            'green'    : {
                DEFAULT:    '#62E3BB',
                dark:       '#2E2912',
            },
            'orange'    : {
                DEFAULT:    '#FF9057',
                dark:       '#DA7642',
            },
            'blue'    : {
                DEFAULT:    '#68AAB1',
                dark:       '#293F56',
            },
            'red'         : '#CE3E1F',
            'mandarin'    : '#DA7642',
            'yellow'      : '#FFFF00',
            'ocean'       : '#68AAB1',
            'maroon'      : '#5B0008',
            'army'        : '#2E2912',
        },
        extend: {
            gridRowStart: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
            },
            gridRowEnd: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
            },
            gridRow: {
                'span-16': 'span 16 / span 16',
            },
            gridTemplateRows:{
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridColumnStart: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
            },
            gridColumnEnd: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
            },
            gridColumn: {
                'span-16': 'span 16 / span 16',
            },
            gridTemplateColumns:{
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            transitionTimingFunction:{
                'e': 'cubic-bezier(0.45, 0, 0.15, 1)',
            },
            transitionProperty: {
                'header': 'background, transform',
                'background': 'background',
                'nav': 'transform, color',
                'link': 'width'
            },
            animation: {
                'fade-in': 'fadeIn 1s ease 0s forwards',
                'fade-in-up': 'fadeInUp 1s ease 0s forwards',
                'slide-down': 'slideDown 0.8s ease 0s forwards',
                'slide-up': 'slideUp 1s ease 0s forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': {  opacity: '0', transform: 'translateY(-100%)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': {  opacity: '0', transform: 'translateY(0)' },
                    '100%': { opacity: '1', transform: 'translateY(-100%)' },
                }
            },
            screens: {
                'tablet': '768px',
                'tablet-landscape': '1024px',
                'laptop': '1440px',
                'desktop': '1920px',
                'big-mutha': '2560px',
            },
        },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
      require('tailwindcss-debug-screens'),
    ],
  }