let mix = require('laravel-mix')

mix.js('resources/js/app.js', 'src/assets')
  .sass('resources/sass/app.scss', 'src/assets')
  .purgeCss({
    folders: [
      'src'
    ],
    extensions: [
      'liquid',
      'js'
    ],
    whitelistPatterns: [
      /small-/,
      /medium-/,
      /large-/,
    ],
  })