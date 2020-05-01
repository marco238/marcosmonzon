const portFinderSync = require('portfinder-sync');

module.exports = () =>({
  devServer: {
    inline: true,
    host: '127.0.0.1',
    port: portFinderSync.getPort(8080),
    compress: true,
    historyApiFallback: true,
    writeToDisk: true
  },
});
