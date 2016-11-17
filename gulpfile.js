var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync'], function() {
    gulp.start('watch');
});

gulp.task('js', function() {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('vorlesungen/**/*', ['js']);
    gulp.watch('tutorium/**/*', ['js']);
    gulp.watch('index.html', ['js']);
});