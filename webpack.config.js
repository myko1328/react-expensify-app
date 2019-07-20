const path = require('path');

console.log(__dirname);
module.exports = {
    entry:'./src/app.js',
    // Here the application starts executing
    // and webpack starts bundling
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', //allows to run babel under certain condition
            test: /\.js$/, //whenever you see a .js file that is not in the node_modules folder, go run it through babel
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use: [
                 'style-loader',
                 'css-loader',
                 'sass-loader'
            ]
        }]
        
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};