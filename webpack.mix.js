const domain = 'fine.test'; // <= EDIT THIS
const homedir = require('os').homedir();
let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Managements
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .options({
        processCssUrls: false,
    })
    .js('resources/js/site.js', 'public/js')
    .postCss('resources/css/main.css', 'public/css', [
        require('postcss-import'),
        require('postcss-for'),
        require('tailwindcss'),
        require('postcss-nested'),
        // require('postcss-preset-env')({ stage: 0 })
    ])
    .copyDirectory('resources/fonts', 'public/fonts')
    .sourceMaps()
    .version()
    .override((config) => {
        delete config.watchOptions;
    });

mix.browserSync({
    proxy: 'http://' + domain,
    host: domain,
    open: 'external',
    // https: {
    //   key: homedir + '/.config/valet/Certificates/' + domain + '.key',
    //   cert: homedir + '/.config/valet/Certificates/' + domain + '.crt',
    // },
    files: [
        'content/**/*',
        'public/**/*',
        'resources/views/**/*'
    ],
})

if (mix.inProduction()) {
    mix.version();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
