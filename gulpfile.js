var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); // create a browser sync instance.

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./public_html/assets/css'))
        .pipe(browserSync.stream());
});
// gulp.task('vue', function () {
//     return gulp.src('./src/vue/**/*.vue')
//         .pipe(browserSync.stream());
// });
gulp.task('js', function () {
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./public_html/assets/js'))
        .pipe(browserSync.stream());
});
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./public_html/"
    });
    gulp.watch("./src/sass/*.sass", ['sass']);
    gulp.watch("./public_html/*.html").on('change', browserSync.reload);
    gulp.watch("./src/vue/**/*.vue").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);