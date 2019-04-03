const webpack = require("webpack")
const path = require("path")
const webpackMerge = require("webpack-merge")
const commonConfig = require('./webpack.common')

module.exports = webpackMerge(commonConfig,{
    mode:"development",
    devServer:{
        contentBase:path.resolve(__dirname,"../src"),
        compress:true,
        port:3001,
        hot:true,
        open:true
    }
})