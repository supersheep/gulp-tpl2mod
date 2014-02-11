var should = require('should');
var gutil = require('gulp-util');
var tpl2mod = require("..");
var fs = require('fs');

require('mocha');

describe('gulptpl2mod', function(){
    it('should transform template to module properly', function(done){
        var tpl2modStream = tpl2mod();

        var fakeFile = new gutil.File({
            base: 'test/fixtures',
            cwd: 'test/',
            path: 'test/fixtures/template.html',
            contents: fs.readFileSync('test/fixtures/template.html')
        });

        tpl2modStream.once('data', function(newFile){
            should.exist(newFile);
            should.exist(newFile.contents);
            String(newFile.contents).should.equal(fs.readFileSync('test/expected/module.js', 'utf8'));
            done();
        });

        tpl2modStream.write(fakeFile);
    });
});