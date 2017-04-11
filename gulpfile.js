/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/

var elixir = require('laravel-elixir'),
    minimist = require('minimist');
require('laravel-elixir-webpack-official');
require('laravel-elixir-minify-html');
require('laravel-elixir-svgmin');
require('laravel-elixir-clear');
require('laravel-elixir-selectorshorten');

/*-------------------------------------------------------------------
Configuration
-------------------------------------------------------------------*/

elixir.config.sourcemaps = true;
elixir.config.assetsPath = 'myresources';
elixir.config.publicPath = 'themes';
elixir.config.css.sass.folder = 'scss';
elixir.config.css.autoprefix.options.browsers = ['> 1%', 'IE > 8'];
elixir.config.css.minifier.pluginOptions = {
    keepSpecialComments: 0
};

/*-------------------------------------------------------------------
Tasks
-------------------------------------------------------------------*/

var knownOptions = { string: 'theme' },
    options = minimist(process.argv.slice(2), knownOptions),
    themeDir = (typeof options.theme !== 'undefined') ? options.theme : 'default';
elixir.config.assetsPath = elixir.config.assetsPath + '/' + themeDir;
elixir.config.publicPath = elixir.config.publicPath + '/' + themeDir;

elixir(function(mix) {
    mix.clear([elixir.config.publicPath]);
    mix.sass('app.scss')
    .sass('amp.scss')
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
    .processEmails({
        source: {
            sass: elixir.config.assetsPath + '/emails/scss/email.scss',
            templates: elixir.config.assetsPath + '/emails/templates',
            images: elixir.config.assetsPath + '/emails/img',
            allowed_view_extensions: 'ss'
        },
        public: {
            views: elixir.config.publicPath + '/templates/emails',
            css: elixir.config.publicPath + '/css',
            images: elixir.config.publicPath + '/images/emails'
        }
    });
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
        ).shorten(['class-','small-','medium-','large-','xlarge-','text-','show-','hide-','fa-'],['ss']);
    } else {
        mix.copy(
            elixir.config.assetsPath + '/templates/**/*.ss',
            elixir.config.publicPath + '/templates'
        );
    }
});
