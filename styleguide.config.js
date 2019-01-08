const merge = require('lodash/merge');
const path = require('path');
const PATHS = {
    build: path.join(__dirname, 'docs'),
};

module.exports = {
    title: 'Documentation for core components',
    defaultExample: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    pagePerSection: true,
    sections: [
        {
            name: 'Core Components',
            components: () => [
                './src/components/text/index.js',
            ],
            styles: {
                StyleGuide: {
                    '@global body': {
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    },
                },
            },
        },
    ],
    webpackConfig: merge(require('./webpack.config.js'), {
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
        },
        output: {
            filename: 'bundle.js',
            path: PATHS.build,
            publicPath: '/docs',
        },
    }),
};
