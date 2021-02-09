const config = require('corifeus-builder/src/utils/config').config
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fileAsset = `[name].[contenthash].[ext]`;
const minimize = process.argv.includes('--mode=production');
const mode = minimize ? 'production' : 'development';
const useStats = process.env.hasOwnProperty('WEBPACK_STATS')

const filenamePrefix = minimize ? '[name].[contenthash]' : '[name]'

let minimizer = undefined;

const top = process.cwd()
const buildDir = top + `/dist`;

let devtool;

const basePath = __dirname;
const targetPath = '../..';
const targetFolder = 'dist';

const pkg = require('../../package')

// https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
/*
https://stackoverflow.com/questions/44317394/webpack-dev-server-with-hot-reload-reloading-entire-page-with-css-changes

'webpack-dev-server/client?http://localhost:8080',
'webpack/hot/only-dev-server',
*/
const webpackHotClintPath = 'webpack/hot/only-dev-server'

const vendorEntry = [
    top + "/src/vendor.js"
]
const mainEntry = [
    top + (minimize ? "/src/main.js" : '/src/main-development.js')
]

const plugins = [
    new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
    }),

    new HtmlWebpackPlugin({
        template: `${top}/src/index.html`,
        inject: 'head',
        scriptLoading: 'defer',
        chunks: ['vendor', 'main'],
        title: pkg.description,
        minify: minimize
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: !minimize ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: !minimize ? '[name].css' : '[name].[contenthash].css',
    }),

];

if (useStats) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    plugins.push(
        new BundleAnalyzerPlugin()
    )
}

if (minimize) {

    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

    plugins.unshift(
        new CleanWebpackPlugin()
    )

    plugins.push(
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
//            cssProcessor: require('cssnano'),
//            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        })
    )


    devtool = false;
    const bannerText = require('corifeus-builder').utils.license();

    minimizer = [
        new TerserPlugin({
            parallel: true,
            extractComments: {
                condition: /^\**!|@preserve|@license|@cc_on/,

                filename: function (fileOptions) {
                    return `${fileOptions.filename}.LICENSE.txt`;
                },
                banner: function (webpackBanner) {
                    return `
${bannerText}
For more information about all licenses, please see ${webpackBanner}
`;
                }
            },
            terserOptions: {
                compress: {
                    warnings: false
                },
                ecma: config.ecma,
                // todo found out if mangle use or not
                // mangle: false === keep function names
                // mangle: true === drop function names
                // for mangle true we are us angularjs-annotate with babel
                mangle: true,
            },
        }),
    ]


    plugins.push(
        new webpack.BannerPlugin({
            banner: bannerText,
            include: /\.css$/,
            exclude: /\.ts$|\.js$/,

// hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]
        })
    )

    /*
    https://webpack.js.org/guides/build-performance/#source-maps
    plugins.push(
        new webpack.SourceMapDevToolPlugin({
            filename: 'sourcemaps/[file].map',
            append: '\n//# sourceMappingURL=./[url]'
        })
    )
     */

    plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/public', to: './' }
            ]
        })
    )


} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
    mainEntry.push(webpackHotClintPath)

}

const fileLoader = [
    {
        loader: 'file-loader',
        options: {
            name: fileAsset,
            outputPath: 'assets',
            context: 'assets',
//            publicPath: 'webpack/assets',
//            useRelativePath: true,
        }
    }
]

const rules = [
    {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
    },
    {
        test: /\.(scss|css)$/,
//      exclude: [`${cwd}/src/assets/ngivr.scss`],
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                },
            },
            'css-loader',
            'sass-loader',
        ],
    },
    {
        test: /\.html$/,
        use: [{
            loader: 'html-loader',
            options: {
                minimize: minimize,
                //caseSensitive: true
            }
        }]
    },
    {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: fileLoader
    },
    {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoader
    }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoader
    }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoader
    }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoader
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoader
    },
]

let optimization = {
    minimize: minimize,
    minimizer: minimizer,
    /*
    */
}

if (minimize) {

    rules.push({
        test: /\.js$/,
        loader: 'webpack-remove-debug'
    })


    rules.push(      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    })
} else {

    optimization = Object.assign(optimization, {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor-modules',
                    chunks: 'all',
                },
            },
        },
    })
}

module.exports = {
//    watch: true,
    devtool: devtool,

    entry: {
        vendor: vendorEntry,
        main: mainEntry,
//        editor: editorEntry,
    },
    output: {
        path: buildDir,
        filename: `${filenamePrefix}.js`,
       // chunkFilename: `${filenamePrefix}.js`,
//        publicPath: '{{ app.url_subdir }}/webpack/',
        publicPath: ``,
    },
    module: {
        rules: rules
    },
    optimization: optimization,
    plugins: plugins,
    mode: mode,

    devServer: {
        contentBase: './src/public',
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: {
            rewrites: [
                {from: /.*\..*/, to: '/index.html'}
            ]
        },
        hot: true,
       // hotOnly: true,
    },

}
