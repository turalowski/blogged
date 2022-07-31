const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  // modifyVars: { '@primary-color': '#04f' },
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  
});
