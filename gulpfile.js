var
  gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnext = require('gulp-cssnext'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify')
;

gulp.task('css', function () {
  return gulp.src('css/main.css')
    .pipe(cssnext({ compress: true }))
    .pipe(autoprefixer({ cascade: false, browsers: 'last 2 versions' }))
    .pipe(gulp.dest('tmp'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('js', function () {
  return gulp.src(['js/quizifier.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('default', ['css', 'js']);

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/*.js', ['js']);
});
