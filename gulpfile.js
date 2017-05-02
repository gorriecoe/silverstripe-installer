/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/

var elixir = require('laravel-elixir'),
    minimist = require('minimist');
require('laravel-elixir-webpack-official');
require('laravel-elixir-minify-html');
require('laravel-elixir-svgmin');
require('laravel-elixir-process-email');

/*-------------------------------------------------------------------
Configuration
-------------------------------------------------------------------*/

elixir.config.sourcemaps = true;
elixir.config.assetsPath = 'myresources';
elixir.config.publicPath = 'themes';
elixir.config.css.sass.folder = 'scss';
elixir.config.css.autoprefix.options.browsers = ['> 1%', 'IE > 8'];
elixir.config.css.minifier.pluginOptions.keepSpecialComments = 0;

var knownOptions = { string: 'theme' },
    options = minimist(process.argv.slice(2), knownOptions),
    themeDir = (typeof options.theme !== 'undefined') ? options.theme : 'default';
elixir.config.assetsPath = elixir.config.assetsPath + '/' + themeDir;
elixir.config.publicPath = elixir.config.publicPath + '/' + themeDir;

elixir.config.email.assets.sass = elixir.config.assetsPath + '/emails/scss/email.scss';
elixir.config.email.assets.templates = elixir.config.assetsPath + '/emails/templates/**/*.ss';
elixir.config.email.public.views = elixir.config.publicPath + '/templates/emails';

/*-------------------------------------------------------------------
Tasks
-------------------------------------------------------------------*/

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
    // Copy fonts from font awesome
    .copy(
        'node_modules/font-awesome/fonts',
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
    .svg(
        elixir.config.assetsPath + '/svg',
        elixir.config.publicPath + '/svg'
    )
    .processEmails();
    if (elixir.config.production) {
        mix.html(
            elixir.config.assetsPath + '/templates/**/*.ss',
            elixir.config.publicPath + '/templates',
            {
                collapseWhitespace: true,
                removeAttributeQuotes: false,
                removeComments: true,
                minifyJS: true
            }
        );
    } else {
        mix.copy(
            elixir.config.assetsPath + '/templates/**/*.ss',
            elixir.config.publicPath + '/templates'
        );
    }
});
