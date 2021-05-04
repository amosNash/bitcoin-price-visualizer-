const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'client'),
            loader: 'babel-loader',
            use: ["source-map-loader"]
        }
    ]
}
};
