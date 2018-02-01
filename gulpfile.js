var gulp = require('gulp');
var rigger = require('gulp-rigger');

gulp.task('default', function () {
    gulp.src('js/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('js/build/'));
});