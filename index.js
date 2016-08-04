'use strict';

var
  babelCore = require('babel-core'),
  // configure it as clean and fast as possible
  babelConfig = {
    ast: false,
    babelrc: false,
    compact: false,
    plugins: [
      'typecheck',
      'syntax-flow',
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
