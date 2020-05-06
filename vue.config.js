module.exports = {
  publicPath: '/',
  outputDir: 'docs',
  configureWebpack: {
    externals: {
      brutusin: 'brutusin',
    },
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      const newEntry = {
        from:
          './node_modules/brutusin-json-forms/dist/js/brutusin-json-forms.min.js',
        to: './js/',
        toType: 'dir',
      };
      args[0].push(newEntry);
      return args;
    });
  },
};
