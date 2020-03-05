
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     console.log(config, env, 'config, env')
//     return config;
// };

module.exports =override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
