const path = require('path');
const config = require('corifeus-builder/src/utils/config').config
const webpack = require('webpack');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const minimize = process.argv.includes('--mode=production');
const mode = minimize ? 'production' : 'development';
const useStats = process.env.hasOwnProperty('WEBPACK_STATS')

const filenamePrefix = minimize ? '[id].[contenthash]' : '[name]'

let minimizer = undefined;

const top = process.cwd()
const buildDir = top + `/dist`;

let devtool;
devtool = minimize ? false : 'source-map';

const pkg = require('../../package')
// Note: 'unsafe-eval' is required for Angular JIT compiler (used during development / hybrid ngUpgrade mode).
// Once fully migrated to Angular AOT compilation, 'unsafe-eval' can be removed.
const cspPolicy = "default-src 'self'; script-src 'self' https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' ws: wss: http://localhost:* http://127.0.0.1:* https://www.google-analytics.com https://region1.google-analytics.com; frame-src https://redis.io; object-src 'none'; base-uri 'self'; form-action 'self'"

// https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
/*
https://stackoverflow.com/questions/44317394/webpack-dev-server-with-hot-reload-reloading-entire-page-with-css-changes

'webpack-dev-server/client?http://localhost:8080',
'webpack/hot/only-dev-server',
*/
const vendorEntry = [
    top + "/src/vendor.js"
]
const mainEntry = [
    top + (minimize ? "/src/main.js" : '/src/main-development.js')
]

const entry = {
    vendor: vendorEntry,
    main: mainEntry,
//        editor: editorEntry,
}

if (!minimize) {
    vendorEntry.push('webpack/hot/only-dev-server')
    vendorEntry.unshift('webpack-dev-server/client?http://localhost:8080/')
}

const plugins = [
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
                // for mangle true we are using angularjs-annotate with babel
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




}

// Inject API port for test/dev override (P3XR_API_PORT env var)
plugins.push(
    new webpack.DefinePlugin({
        P3XR_API_PORT: JSON.stringify(parseInt(process.env.P3XR_API_PORT || '7843')),
    })
)

// Angular AOT compilation — eliminates @angular/compiler from the bundle (~1MB savings)
plugins.push(
    new AngularWebpackPlugin({
        tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
        jitMode: false,
    })
)

const rules = [
    {
        test: /\.[cm]?js$/,
        include: /node_modules/,
        resolve: { fullySpecified: false },
        use: {
            loader: 'babel-loader',
            options: {
                compact: false,
                plugins: [
                    '@angular/compiler-cli/linker/babel',
                ],
            },
        },
    },
    {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: '@ngtools/webpack',
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
}

if (minimize) {

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

const webpackConfig = {
//    watch: true,
    devtool: devtool,

    entry: entry,
    output: {
        path: buildDir,
        filename: `${filenamePrefix}.js`,
        // chunkFilename: `${filenamePrefix}.js`,
//        publicPath: '{{ app.url_subdir }}/webpack/',
        publicPath: ``,
        assetModuleFilename: 'assets/[hash][ext]',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: rules
    },
    optimization: optimization,
    plugins: plugins,
    mode: mode,

    devServer: {
        headers: {
            'Content-Security-Policy': cspPolicy,
        },
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
        // hotOnly: true,
        client: {
            overlay: false,
        },
    },

}

webpackConfig.ignoreWarnings = [/Failed to parse source map/];

module.exports = webpackConfig
