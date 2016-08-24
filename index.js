'use strict';

var
  babelCore = require('babel-core'),
  babelConfig = {
    ast: false,
    babelrc: false,
    compact: false,
    // these needs to be installed a part
    plugins: [
      // babel-plugin-typecheck
      'typecheck',
      // babel-plugin-syntax-flow
      'syntax-flow',
      // babel-plugin-transform-flow-strip-types
      'transform-flow-strip-types'
    ]
  },
  through = require('through')
;

module.exports = function(file) {
  var data = '';
  return through(
    function write(buf) {
      data += buf;
    },
    function end() {
      try {
        data = babelCore.transform(data, babelConfig).code;
      } catch(e) {
        this.emit('error', '[flowify] ' + file + ': ' + e);
      }
      this.queue(data);
      this.queue(null);
    }
  );
};
