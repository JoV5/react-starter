const path = require('path');

module.exports = {
  entry: {
    react: ['react', 'react-dom']
  },
  resolve: {
    alias: {
      'Containers': path.resolve(__dirname, 'containers/')
    }
  }
};