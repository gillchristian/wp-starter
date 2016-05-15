'use strict';
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

// --- exports ---
module.exports = {
    notifyCb,
    cssPipe,
};

/**
 * Callback for the notify plugin
 */
function notifyCb(err) {
    notify({ title: 'CSS Task' }).write(err.line + ': ' + err.message);
    return this.emit('end');
}

/**
 * CSS pipe
 * 
 * @parma {mixed} src files
 * @parma {mixed} dest folders
 * @return {obj} gulp pipe
 */
function cssPipe(src, dest) {
    return gulp.src(src)
            .pipe( sourcemaps.init() )
            .pipe( sass().on('error', notifyCb ))
            .pipe( rucksack({autoprefixer: true, fallbacks: false }) )
            .pipe( sourcemaps.write() )
            .pipe( gulp.dest(dest) )
}