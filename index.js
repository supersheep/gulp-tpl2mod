var map = require("map-stream");
var merge = require("merge");
var tpl2mod = require("tpl2mod");

module.exports = function(options){
    options = merge({
      prefix:"",
      suffix:"",
      trimline:true,
      remainbreak:false
    },options);

    return map(function(file,cb){
        file.contents = new Buffer(tpl2mod(file.contents.toString('utf8'),options));
        file.path = file.path + '.js';
        cb(null, file);
    });
}
