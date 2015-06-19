var
  gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnext = require('gulp-cssnext'),
  cssnano = require('gulp-cssnano'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify')
;

gulp.task('css-main', function () {
  return gulp.src('css/main.css')
    .pipe(cssnext())
    .pipe(autoprefixer({ cascade: false, browsers: 'last 2 versions' }))
    .pipe(replace(/svg\>/g, 'svg%3E'))
    .pipe(replace(/\<svg/g, '%3Csvg'))
    .pipe(replace(/\>\</g, '%3E%3C'))
    .pipe(replace(/='#/g, "='%23"))
    .pipe(gulp.dest('tmp'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('css-common', function () {
  return gulp.src('common/prism.css')
    .pipe(cssnext())
    .pipe(autoprefixer({ cascade: false, browsers: 'last 2 versions' }))
    .pipe(replace(/svg\>/g, 'svg%3E'))
    .pipe(replace(/\<svg/g, '%3Csvg'))
    .pipe(replace(/\>\</g, '%3E%3C'))
    .pipe(replace(/='#/g, "='%23"))
    .pipe(gulp.dest('tmp'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./common/'))
  ;
});

gulp.task('js', function () {
  return gulp.src(['js/*.js'])
    .pipe(concat('activities.min.js'))
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('build-css-main', ['css-main'], function () {
  return gulp.src(['main.min.css'])
    .pipe(cssnano())
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('build-css-common', ['css-common'], function () {
  return gulp.src(['./common/*.min.css'])
    .pipe(cssnano())
    .pipe(gulp.dest('./common/'))
  ;
});

gulp.task('build-js', ['js'], function () {
  return gulp.src(['activities.min.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task('build', ['build-css-main', 'build-css-common', 'build-js']);

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['css-main', 'css-common']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['css-main', 'css-common', 'js']);
