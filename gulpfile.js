var gulp        = require('gulp'),
    browserSync = require('browser-sync');

// Watch task live reloading with browser-sync
gulp.task('server', ['browser-sync']);

// We need this to autoreload everything
gulp.task('browser-sync', function () {
  var files = [
      'src/**/*.html',
      'src/**/*.css',
      'src/**/*.js',
      'src/images/**/*.png',
      'src/images/**/*.jpg',
      'src/images/**/*.gif'
  ];

  browserSync.init(files, {
      server: {
          baseDir: 'src',
          index: 'index.html'
      },
      reloadDelay: 1000
  });

  // Watch any files in src and reload on change
  gulp.watch(['src/**']).on('change', browserSync.reload);
});
