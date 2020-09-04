// razzle.config.js
const path = require('path');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.resolve.alias['@app'] = path.resolve(__dirname, './src');
    return config;
  },
};