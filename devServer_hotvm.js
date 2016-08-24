var path = require("path");
var webpack = require("webpack");
var express = require("express");
var webpackDevMV = require("webpack-dev-middleware");
var webpackHotMV = require("webpack-hot-middleware");
var webpackCfg = require("./webpack.config.dev.js");



var compiler = webpack(webpackCfg);

//init server
var app = express();

//add dev middleware
app.use(webpackDevMV(compiler, {
    //noInfo: true,
    publicPath: webpackCfg.output.publicPath
}))

//add hot middleware
app.use(webpackHotMV(compiler))


//router
app.get("/", function (req, resp) {
    resp.sendFile(path.join(__dirname, "/index.html"))
});



app.listen(9090, "localhost", function (err) {
    if (err) {
        console.log(err);
    }
});

console.log("listen at http://localhost:9090");