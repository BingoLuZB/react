// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//       config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config, addDecoratorsLegacy());
//       return config;
// };
const { override, fixBabelImports, addDecoratorsLegacy  } = require('customize-cra');
 module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),addDecoratorsLegacy()
);