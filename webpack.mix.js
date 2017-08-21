/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/
const { mix } = require('laravel-mix');
minimist = require('minimist');

/*-------------------------------------------------------------------
Configuration
-------------------------------------------------------------------*/

var config = {
    assetsPath: 'myresources',
    publicPath: 'themes',
    sassFolder: 'scss'
};

/*-------------------------------------------------------------------
Tasks
-------------------------------------------------------------------*/

var knownOptions = { string: 'theme' },
    options = minimist(process.argv.slice(2), knownOptions),
    themeDir = (typeof options.theme !== 'undefined') ? options.theme : 'default';
config.assetsPath = config.assetsPath + '/' + themeDir;
config.publicPath = config.publicPath + '/' + themeDir;
config.sassPath = config.assetsPath  + '/' + config.sassFolder;

mix.webpackConfig({
    module: {
        rules: [
                {
                    test: /\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: Config.babel()
                        }
                    ]
                }
            ]
        }
    })
    .js(
        config.assetsPath + '/js/app.js',
        config.publicPath + '/javascript/app.js'
    )
    .sass(
        config.sassPath + '/app.scss',
        config.publicPath + '/css/'
    )
    .sass(
        config.sassPath + '/editor.scss',
        config.publicPath + '/css/'
    )
    .sourceMaps()
    .copyDirectory(
        config.assetsPath + '/favicon',
        config.publicPath + '/favicon'
    )
    .copyDirectory(
        config.assetsPath + '/fonts',
        config.publicPath + '/fonts'
    )
    .copyDirectory(
        'node_modules/font-awesome/fonts',
        config.publicPath + '/fonts'
    )
    .copyDirectory(
        config.assetsPath + '/img',
        config.publicPath + '/img'
    )
    .copyDirectory(
        config.assetsPath + '/svg',
        config.publicPath + '/svg'
    )
    .copyDirectory(
        config.assetsPath + '/templates',
        config.publicPath + '/templates'
    )
    .options({
        processCssUrls: false,
        purifyCss: false,
        clearConsole: true
    });
mix.browserSync({
    proxy: '[yoursite]',
    files: [config.publicPath + '/**/*']
});
