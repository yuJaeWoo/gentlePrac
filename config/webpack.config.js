const path = require('path');

module.exports = {
    entry: './src/www.ts',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                user: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundel.js',
        path: path.resolve(__dirname, 'dist')
    }
};