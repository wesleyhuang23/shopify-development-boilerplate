let mix = require('laravel-mix')

mix.js('resources/js/app.js', 'src/assets')
    .sass('resources/scss/app.scss', 'src/assets')
    .setPublicPath(path.normalize('src/assets'))