var gulp = require('gulp')
    , jshint = require('gulp-jshint')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , karma = require('gulp-karma')
    , notify = require('gulp-notify')
    , del = require('del')
    , stylish = require('jshint-stylish')

    , pkg = require('./package.json');

gulp.task('test', function () {
    return gulp.src('')
        .pipe(karma());
});

gulp.task('build', function () {
    return gulp.src('belt.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(rename('belt-v' + pkg.version + '.min.js'))
        .pipe(gulp.dest('build/'))
        .pipe(notify({message: 'Build of Belt v' + pkg.version + ' completed'}));
});

gulp.task('default', function(){
    notify({message: 'You need to choose a task. Either `build` or `test` are valid'});
});
