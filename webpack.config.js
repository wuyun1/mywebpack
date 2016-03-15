var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');



module.exports = {
    //插件项
    plugins: [
        // commonsPlugin,

        // new webpack.DefinePlugin({   
        //     'process.env.NODE_ENV': '"development"'
        // }),

        // new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    //页面入口文件配置
    // entry: {
    //     index: './src/js/page/index.js'
    // },



    entry: APP_PATH + "/js",
    //入口文件输出配置
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        // publicPath: ".",
         
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: APP_PATH
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'babel', 'jsx'],
            include: APP_PATH,

        }, {
            test: /\.js6$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap',
            include: APP_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192',
            include: APP_PATH
        }]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }

};