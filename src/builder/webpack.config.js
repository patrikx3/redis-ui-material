const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

const fileAsset = `[name].[hash].[ext]`;
const minimize = process.argv.includes('--production');
const mode = minimize ? 'development' : 'production';

const filenamePrefix = minimize ? '[name].[hash]' : '[name]'

let minimizer = undefined;

const top = process.cwd()
const buildDir = top + `/dist`;

let devtool;

const basePath = __dirname;
const targetPath = '../..';
const targetFolder = 'dist';

const pkg = require('../../package')

const plugins = [
    new HtmlWebpackPlugin({
        template: `${top}/src/index.html`,
        inject: 'head',
        chunksSortMode: 'dependency',
        chunks: ['bundle'],
        title: pkg.description,
        minify: minimize
    }),
    new ExtractTextPlugin({
        filename: `${filenamePrefix}.css`,
        disable: false,
        allChunks: true
    }),


];

if (minimize) {

    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

    plugins.unshift(
        new CleanWebpackPlugin([targetFolder], {
            root: basePath + '/' + targetPath
        })
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
            sourceMap: true,
            parallel: true,
            cache: true,
            extractComments: {
                condition: /^\**!|@preserve|@license|@cc_on/,

                filename: function (fileName) {
                    return `${fileName}.LICENSE.txt`;
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
                ecma: 8,
                // todo found out if mangle use or not
                // mangle: false === keep function names
                // mangle: true === drop function names
                mangle: false,
                sourceMap: true,
                comments: false,
                beautify: false
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

    plugins.push(
        new webpack.SourceMapDevToolPlugin({
            filename: 'sourcemaps/[file].map',
            append: '\n//# sourceMappingURL=./[url]'
        })
    )


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
module.exports = {
//    watch: true,
    devtool: devtool,

    entry: {
        bundle: top + "/src/bundle.js",
    },
    output: {
        path: buildDir,
        filename: `${filenamePrefix}.js`,
        chunkFilename: '[id].chunk.js',
//        publicPath: '{{ app.url_subdir }}/webpack/',
        publicPath: ``,
    },
    module: {
        rules: [
                {
                test: /\.(scss|css)$/,
//      exclude: [`${cwd}/src/assets/ngivr.scss`],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: minimize === true

                            }
                        }
                        , 'sass-loader'],

                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: mode,
                        caseSensitive: true
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
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                   // fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: minimize,
                                sourceMap: true
                            },
                        }]
                })
            }
        ]
    },
    optimization: {
        minimize: minimize,
        minimizer: minimizer
    },
    plugins: plugins,
    mode: mode,

    devServer: {

        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: {
            rewrites: [
                {from: /.*\..*/, to: '/index.html'}
            ]
        },
        hot: true,
        inline: true,
        stats: {
            colors: true
        },
        clientLogLevel: 'none',
        progress: true,
        noInfo: false
    },

}
