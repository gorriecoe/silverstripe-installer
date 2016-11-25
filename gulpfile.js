/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/

var elixir = require('laravel-elixir'),
    minimist = require('minimist');
require('laravel-elixir-webpack-official');
require('laravel-elixir-clean');
require('laravel-elixir-minify-html');

/*-------------------------------------------------------------------
Configuration
-------------------------------------------------------------------*/

elixir.config.sourcemaps = true;
elixir.config.assetsPath = 'myresources';
elixir.config.publicPath = 'themes';
elixir.config.css.sass.folder = 'scss';
elixir.config.css.autoprefix.options.browsers = ['> 1%', 'IE > 8'];

/*-------------------------------------------------------------------
Tasks
-------------------------------------------------------------------*/

var knownOptions = { string: 'theme' };
var options = minimist(process.argv.slice(2), knownOptions);
if (typeof options.theme !== 'undefined') {
    $themeDir = options.theme;
} else {
    $themeDir = 'default';
}

elixir.config.assetsPath = elixir.config.assetsPath + '/' + $themeDir;
elixir.config.publicPath = elixir.config.publicPath + '/' + $themeDir;


elixir(function(mix) {
    mix.sass('app.scss')
        .sass('editor.scss')
        .webpack(
            'app.js',
            elixir.config.publicPath + '/js/app.js'
        )
        .copy(
            elixir.config.assetsPath + '/fonts',
            elixir.config.publicPath + '/fonts'
        )
        .copy(
            elixir.config.assetsPath + '/favicon',
            elixir.config.publicPath + '/favicon'
        )
        .copy(
            elixir.config.assetsPath + '/img',
            elixir.config.publicPath + '/img'
        )
        .html(
            elixir.config.assetsPath + '/templates/**/*.ss',
            elixir.config.publicPath + '/templates',
            {
                collapseWhitespace: true,
                removeAttributeQuotes: false,
                removeComments: true,
                minifyJS: true
            }
        )
});
