var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cached');
var lint = require('gulp-eslint');

gulp.task('default', ['browser-sync'], function() {
    gulp.start('watch');
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('eslint', function () {
    return gulp.src(['**/**/*.js', '!node_modules/**'])
        .pipe(cache('linting'))
        .pipe(lint())
        .pipe(lint.format());
});

gulp.task('browser-sync', ['eslint'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('vorlesungen/**/*', ['eslint', 'reload']);
    gulp.watch('experiments/**/*', ['eslint', 'reload']);
});