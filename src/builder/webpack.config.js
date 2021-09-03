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

const filenamePrefix = minimize ? '[id].[contenthash]' : '[name]'

let minimizer = undefined;

const top = process.cwd()
const buildDir = top + `/dist`;

let devtool;

const basePath = __dirname;
const targetPath = '../..';
const targetFolder = 'dist';

const pkg = require('../../package')
const path = require("path");

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
        filename: !minimize ? '[name].css' : '[id].[contenthash].css',
        chunkFilename: !minimize ? '[name].css' : '[id].[contenthash].css',
    }),

];

if (useStats) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    plugins.push(
        new BundleAnalyzerPlugin()
    )
}

if (minimize) {

    plugins.unshift(
        new CleanWebpackPlugin()
    )

    devtool = false;
    const bannerText = require('corifeus-builder').utils.license();

    const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

    minimizer = [
        new CssMinimizerPlugin(),
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
        test: /\.html$/i,
        use: [{
            loader: 'html-loader',
            options: {
                minimize: minimize,
                esModule: false,
            },
        }]
    },
    {
        test: /\.(png|jpe?g|gif|ico)$/,
        type: 'asset/resource',
    },
    {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
    }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
    }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
    }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
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
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: rules
    },
    optimization: optimization,
    plugins: plugins,
    mode: mode,

    devServer: {
        static: {
            directory: './src/public',
            staticOptions: {},
            publicPath: "/",
            serveIndex: true,
            watch: true,
        },
        host: '0.0.0.0',
        historyApiFallback: {
            rewrites: [
                {from: /.*\..*/, to: '/index.html'}
            ]
        },
        hot: true,
       // hotOnly: true,
    },

}
