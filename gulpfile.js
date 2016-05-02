// gulpfile.js
var gulp = require('gulp');

// define plug-ins
var flatten = require('gulp-flatten'),
    gulpFilter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    mainBowerFiles = require('main-bower-files');

// Define paths variables
var dest_path = 'JadeApp/assets';
var test_path = 'JadeApp.Tests/assets';

// grab libraries files from bower_components, minify and push in /public
gulp.task('prod_assets', function () {
    var jsFilter = gulpFilter('**/*.js', { restore: true }),
        cssFilter = gulpFilter('**/*.css', { restore: true }),
        fontFilter = gulpFilter(['**/*.eot', '*.woff', '*.svg', '*.ttf'], { restore: true });

    return gulp.src(mainBowerFiles())

    // grab vendor js files from bower_components, minify and push in /public
    .pipe(jsFilter)
    .pipe(gulp.dest(dest_path + '/js/'))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(dest_path + '/js/'))
    .pipe(jsFilter.restore)

    // grab vendor css files from bower_components, minify and push in /public
    .pipe(cssFilter)
    .pipe(gulp.dest(dest_path + '/css'))
    .pipe(minifycss())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(dest_path + '/css'))
    .pipe(cssFilter.restore)

    // grab vendor font files from bower_components and push in /public
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(dest_path + '/fonts'));
});

gulp.task('test_assets', ['prod_assets'], function () {

    return gulp.src(dest_path + '/**/*', { base: 'JadeApp/assets' })
      .pipe(gulp.dest('JadeApp.Tests/assets'));
});

gulp.task('default', ['prod_assets', 'test_assets'])
