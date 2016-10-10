"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync');
var notify = require("gulp-notify");
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');


gulp.task("style", function() {
  return gulp.src("./source/css/style.css")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream())
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./build/css'))
    .pipe(notify("style"));
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './build/'
    }
  });
});

gulp.task('scripts', function() {
  return gulp.src(['./source/js/*.js'])
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream())
    .pipe(notify("script"));
});

gulp.task('imagemin', ['copy'], function() {
  gulp.src('./build/img/**/')
  .pipe(imagemin({
      progressive: true
  }))
  .pipe(gulp.dest('./build/img/'))
});

gulp.task('clean', function () {
  return gulp.src('./build/*', {read: false})
    .pipe(clean());
});

gulp.task('copy', function () {
  gulp.src(['./source/img/**/'])
    .pipe(gulp.dest('./build/img/'))
  gulp.src('./source/*.html')
    .pipe(gulp.dest('./build/'))
});

gulp.task('html', function () {
  gulp.src('./source/*.html')
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream())
    .pipe(notify("html"));
});

gulp.task("start", ["style", "server"], function() {
  gulp.watch("./source/css/**/*.css", ["style"]);
  gulp.watch('./source/js/*.js', ['scripts']);
  gulp.watch("./source/*.html", ['html']);
});

gulp.task('build', function() {
  runSequence(
    'clean',
    'copy',
    'style',
    'scripts',
    'html'
  );
});

gulp.task('default', function() {
  runSequence(
    'build',
    'start'
  );
});





