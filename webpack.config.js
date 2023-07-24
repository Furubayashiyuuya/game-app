const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './server/index.js',
    target: 'node',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        fs: false,
        path: require.resolve('path-browserify'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
    },
    module: {
      rules: [
        {   
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  {
    mode: 'development',
    entry: './src/index.tsx',
    target: 'node',
    output: {
      filename: 'client.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        fs: false,
        path: require.resolve('path-browserify'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
    },   
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
  }
];
