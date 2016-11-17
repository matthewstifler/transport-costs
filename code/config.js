module.exports.config = {
  pageSettings: {
    loadImages: true,//The script is much faster when this field is set to false, but it's set to true to prevent memory leaks
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
  },
  verbose: true,
  waitTimeout: 20000
  //logLevel: "debug"
};