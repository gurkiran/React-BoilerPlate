var gulp = require('gulp'); // responsible for build process
var gutil = require('gulp-util'); // responsible for console logging out of build process
var source = require('vinyl-source-stream'); // used for handling our text files from one part to another
var browserify = require('browserify'); // for figuring out what part depends on another
var watchify = require('watchify'); // its a tool thats going to automatically re run gulp file
var reactify = require('reactify'); // converting all our jsx files to js files

gulp.task('default', function(){
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'], // serves as an entry point to start bundling
        transform: [reactify], // prepare for converting jsx to js
        extensions: ['.jsx'], // telling which extension to look for , for conversion
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
      if(file) gutil.log('Recompiling'+ file);
      return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js')) // bundle and build to this file name
        .pipe(gulp.dest('./')); // where to put that file
    };
    build();
    bundler.on('update', build); // build when any change occurs
});
