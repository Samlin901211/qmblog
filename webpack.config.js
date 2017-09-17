const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')

const generateHtml = new HtmlWebpackPlugin({
    title: 'QQMusic Blog',
    filename: path.resolve(__dirname, './dist/index.html'),
    template: path.resolve(__dirname, './src/index.html'),
    minify: {
        removeComments: true
    }
})

const extractCSS = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV != 'production'
})

module.exports = {
    entry: {
        vendor: ['vue', 'vue-router'],
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: extractCSS // 无需额外处理less
                }
            }, {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        generateHtml,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        extractCSS
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack
            .optimize
            .UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
        new webpack.LoaderOptionsPlugin({minimize: true})
    ])
}
