var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false //remove all warnings
    },
    output: {
        comments: false //remove all comments
    },
    // mangle: { 可以不要用这个
    //     except: ['$super', '$', 'exports', 'require']
    // }
})
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js')
var DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
})
module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    entry: {
        'vendors': ['react', 'react-dom'],
        //多入口启动热加载
        'app': [
            'webpack-hot-middleware/client',
            './src/index'
        ],
        'reflux': [
            'webpack-hot-middleware/client',
            './src/reflux-entry'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), UglifyJsPlugin, commonsPlugin, DefinePlugin
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};