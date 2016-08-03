'use strict';

var babelCore = require('babel-core');
var babelConfig = {plugins: ['transform-flow-strip-types']};
var through = require('through');

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
                this.emit('error', e.message);
            }
            this.queue(data);
            this.queue(null);
        }
    );
};
