const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename : 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/, exclude:/node_modules/, use: 'babel-loader'
            }
        ]
    }
}