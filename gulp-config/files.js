'use strict';
let FILES = {
    css: {
      main: 'sass/index.scss',
      admin: 'sass/admin/*.scss',
      all: 'sass/**/*.scss',
      dest: {
      	main: 'framework/css',
      	admin: 'framework/css',
      }
    },
    js: {
      all: ['framework/js/**/*.js, !framework/js/**/*.min.js' ],
      dest: 'framework/js'
    }
};

module.exports = FILES;
