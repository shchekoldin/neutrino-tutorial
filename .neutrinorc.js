module.exports = {
    use: [
        ['neutrino-preset-web', {
            // Enables Hot Module Replacement. Set to false to disable
            hot: true,

            polyfills: {
                // Enables fast-async polyfill. Set to false to disable
                async: true,
                // Enables babel-polyfill. Set to false to disable
                babel: true
            },

            // Change options related to generating the HTML document
            // See neutrino-middleware-html-template for the defaults
            // used by the Web preset
            html: {},

            // Change options related to starting a webpack-dev-server
            // See neutrino-middleware-html-template for the defaults
            // used by the Web preset
            devServer: {
                // Disabling options.hot will also disable devServer.hot
                hot: options.hot
            },

            // Add additional Babel plugins, presets, or env options
            babel: {
                // Override options for babel-preset-env
                presets: [
                    ['babel-preset-env', {
                        // Passing in targets to babel-preset-env will replace them
                        // instead of merging them
                        targets: {
                            browsers: [
                                'last 1 Chrome versions',
                                'last 1 Firefox versions'
                            ]
                        }
                    }]
                ]
            }
        }]
    ]
};
