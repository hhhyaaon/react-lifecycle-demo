var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtraTextPlugin = require("extract-text-webpack-plugin");

var devPath = path.join(__dirname, "./src");
var distPath = path.join(__dirname, "./dist");

module.exports = {
    cache: true,
    debug: true,
    entry: {
        "index": "./src/views/index.js"
    },
    output: {
        filename: "[name].js",
        path: distPath,
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    cacheDirectory: true
                },
                exclude: /node_modules/
            }, {
                test: /.css/,
                loader: ExtraTextPlugin.extract("style", "css"),
                include: [
                    path.join(devPath, "./css")
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "测试React生命周期",
            template: path.join(devPath, "./tpl/index.html"),
            filename: path.join(devPath, "../") + "index.html",
            cache: true,
            chunks: ["index"]
        }),
        new ExtraTextPlugin("[name].css", {
            allChunks: true
        })
    ]
}