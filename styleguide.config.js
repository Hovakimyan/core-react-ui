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
    serverPort: 3000,
    theme: {
        baseBackground: '#fdfdfc',
        link: '#274e75',
        linkHover: '#90a7bf',
        border: '#e0d2de',
        font: ['Helvetica', 'sans-serif'],
    },
    styles: {
        Playground: {
            preview: {
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: [[0, 0, 1, 0]],
                borderRadius: 0,
            },
        },
        Markdown: {
            pre: {
                border: 0,
                background: 'none',
            },
            code: {
                fontSize: 14,
            },
        },
    },
    sections: [
        {
            name: 'Introduction',
            content: 'docs/introduction.md'
        },
        {
            name: 'Atoms',
            components: './src/components/atoms/*/index.js',
            styles: {
                StyleGuide: {
                    '@global body': {
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    },
                },
            },
        },
        {
            name: 'Molecules',
            components: './src/components/molecules/*/index.js',
            styles: {
                StyleGuide: {
                    '@global body': {
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    },
                },
            },
        },
        {
            name: 'Organism',
            components: './src/components/organism/*/index.js',
            styles: {
                StyleGuide: {
                    '@global body': {
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    },
                },
            },
        },
    ],
    styleguideComponents: {
        SectionsRenderer: path.join(__dirname, 'src/styleguide/components/section'),
    },
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
