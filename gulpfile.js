var gulp     = require('gulp'),
    less     = require('gulp-less'),
    gls      = require('gulp-live-server');

//Transpile LESS
gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./src/public/css/'));
});

//RUN LOCAL SERVER
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000});
  server.start();

  gulp.watch(['gulpfile.js', './src/index.js'], function() {
    server.start.bind(server)()
  });
});

gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less'])
})

//Deafult Gulp task
gulp.task('default', ['watch', 'less', 'server']);
