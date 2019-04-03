const webpack = require("webpack")
const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:path.resolve(__dirname,"../src/index.js"),
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"static/js/[name]-[hash:6].min.js"
    },
    module:{
        rules:[
            // {test: /\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.less$/,use:[
                {loader:"style-loader"},
                {loader:"css-loader"},
                {
                    loader:"less-loader",
                    options:{
                        modifyVars:{
                            "@primary-color":"#058F4C",
                            "@link-color":"#058F4C",
                            "@border-radius-base":"2px"
                        },
                        javascriptEnabled:true
                    }
                }
            ]},
            {test:/\.js$/,use:"babel-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"})
    ],
    resolve:{
        extensions:[".js",".jsx",".json",".less"],
        modules:["node_modules"],
        alias:{
            "@":path.resolve(__dirname,"../src")
        }
    }
}