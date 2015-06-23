var gulp         = require('gulp');
var less         = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var spawn = require('child_process').spawn;

///////////////////////////////////////////////////////////////////////////////

require("./gulp/SUI.js");

///////////////////////////////////////////////////////////////////////////////

gulp.task("default", ["BPA-watch"]);
gulp.task("build" , ["SUI-build", "BPA-build"]);
gulp.task("less", css);
gulp.task("js", js);

gulp.task("BPA-build", ["SUI-extract", "less", "js"]);
gulp.task("BPA-watch", ["BPA-build"], watch);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function js(){
    gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist')); 
}

///////////////////////////////////////////////////////////////////////////////

function css(){
  return gulp.src('./src/less/bonaparte.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/')); 
}

///////////////////////////////////////////////////////////////////////////////

function watch(){
  gulp.watch(["./src/less/**/*.less"], ["less"]);
  gulp.watch(["./src/js/**/*.js"], ["js"]);
};


