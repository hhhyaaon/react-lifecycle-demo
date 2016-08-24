var path = require("path");
var webpack = require("webpack");
//var express = require("express");
var webpackDevServer = require("webpack-dev-server");
//var webpackDevMV = require("webpack-dev-middleware");
var webpackCfg = require("./webpack.config.dev.js");



var compiler = webpack(webpackCfg);

//init server
var app = new webpackDevServer(compiler, {
    publicPath: webpackCfg.output.publicPath,
    hot: true
});


// //add dev middleware
// app.use(webpackDevMV(compiler, {
//     //noInfo: true,
//     publicPath: webpackCfg.output.publicPath
// }))

// //add hot middleware
// app.use(webpackHotMV(compiler))


// //router
// app.get("/", function (req, resp) {
//     resp.sendFile(path.join(__dirname, "/index.html"))
// });



app.listen(9390, "localhost", function (err) {
    if (err) {
        console.log(err);
    }
});

console.log("listen at http://localhost:9390");