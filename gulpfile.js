var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(function(mix) {
//     mix.sass('app.scss')
//     .browserSync();
// });



var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
// var browserSync = require ('browser-sync').create();

gulp.task('watch', ['sass'], function(){
  gulp.watch('resources/assets/sass/**/*.scss', ['sass','minify-css']); 
  // gulp.watch('*.html', browserSync.reload); 
  // gulp.watch('js/**/*.js', browserSync.reload); 

})

gulp.task('sass', function(){
  return gulp.src('resources/assets/sass/app.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/stylesheets/'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
});

gulp.task('minify-css', function() {
  return gulp.src('public/stylesheets/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('stylesheets/'));
});

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'public'
//     },
//   })
// })