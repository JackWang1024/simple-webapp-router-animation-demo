var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minifyjs', function(){
    return gulp.src('js/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('minifycss', function(){
    return gulp.src('style/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['jshint'], function() {
    gulp.start('minifycss', 'minifyjs'); 
});