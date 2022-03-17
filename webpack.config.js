const webpack = require("@nativescript/webpack");

module.exports = (env) => {
    webpack.init(env);

    // Learn how to customize:
    // https://docs.nativescript.org/webpack

    webpack.chainWebpack((config) => {
        // t&e to solve `Module not found: Error: Can't resolve 'fs' in './node_modules/source-map/lib'`
        // thanks to @herefishyfishyfish at discord
        // @see https://discord.com/channels/603595811204366337/890118789876834344/890178556443906078

        const fallback = config.resolve.get("fallback");
        config.resolve.set(
            "fallback",
            webpack.Utils.merge(fallback || {}, {
                fs: require.resolve("@nativescript/core/"),
            })
        );
    });

    return webpack.resolveConfig();
};
