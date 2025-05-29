const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./dist/index.html",
        title: "Trivia App"
        })
    ]
};
