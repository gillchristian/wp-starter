'use strict';
   // this function is strict...

var gulp            = require('gulp'),
    merge           = require('merge-stream'),
    rename          = require('gulp-rename'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    notify          = require('gulp-notify'),
    // Style plugins    
    sass            = require('gulp-sass'),
    postcss         = require('gulp-postcss'),
    csswring        = require('csswring'),
    rucksack        = require('gulp-rucksack');

// import the variables for the tasks and files, etc

var TASKS           = require('./gulp-config/tasks'),
    FILES           = require('./gulp-config/files'),
    HELPERS         = require('./gulp-config/helpers');

// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.style, function () {

    // wp-admin styles
    let admin = HELPERS.cssPipe(FILES.css.admin, FILES.css.dest.admin);
    
    // main styles file
    let main = HELPERS.cssPipe(FILES.css.main, FILES.css.dest.main);

    return merge(admin, main);
});

// build js
// --------------------------------------------------------
gulp.task(TASKS.minify.js, function(){
    return gulp.src(FILES.js.all)
        .pipe( rename({suffix: '.min'}) )
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(FILES.js.dest));
});

// watch all
// --------------------------------------------------------
gulp.task(TASKS.watch.all, function () {
    gulp.watch( FILES.css.all, [TASKS.dev.style]);
    gulp.watch( FILES.js.all, [TASKS.minify.js]);
});

// default
// --------------------------------------------------------
gulp.task(TASKS.default, [TASKS.dev.style, TASKS.minify.js, TASKS.watch.all]);