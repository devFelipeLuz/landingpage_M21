const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// comentário padrão

function images() {
    return gulp.src('./src/images/**/*') // pega tudo dentro da pasta images
        .pipe(gulp.dest('./dist/images')); // copia sem alterar
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));

}

exports.default = gulp.parallel(styles, scripts, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}