// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = env => {
    return {
        mode: 'development',
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            path: __dirname+'/dist',
            filename: 'index.js',
            libraryTarget: 'commonjs2',
        },
        devtool: 'source-map',
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components/'),
                atoms: path.resolve(__dirname, 'src/components/atoms/'),
                molecules: path.resolve(__dirname, 'src/components/molecules/'),
                organism: path.resolve(__dirname, 'src/components/organism/'),
            },
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'eslint-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                },
                {
                    test: /(\.css|\.scss|\.sass)$/,
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['./node_modules'],
                            },
                        },
                    ],
                },
            ],
        },
        externals: {
            'react': 'commonjs react',
        },
    }
};
