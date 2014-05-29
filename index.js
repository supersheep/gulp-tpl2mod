var map = require("map-stream");
var merge = require("merge");
var util = require('gulp-util');
var tpl2mod = require("tpl2mod");

module.exports = function(options){
    options = merge({
      prefix:"define(function(require, exports, module){\n    module.exports = ",
      suffix:"\n});",
      trimline:true,
      remainbreak:false
    },options);

    return map(function(file,cb){
        file.contents = new Buffer(tpl2mod(file.contents.toString('utf8'),options));
        file.path = util.replaceExtension(file.path, '.html.js');
        cb(null, file);
    });
}
