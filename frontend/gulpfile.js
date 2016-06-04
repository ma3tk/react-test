var gulp = require('gulp');
var webpack = require('gulp-webpack');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');

const JS_SRC = '';
const JS_DEST = '../app/assets/javascripts/dist';
const CSS_SRC = 'src/stylesheets/main.scss';
const CSS_DEST = '../app/assets/stylesheets/dist';

var webpackConfig = {
  entry: {
    main: './src/javascripts/main.js',
  },
  output: {
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
}

gulp.task('js:main', function() {
  gulp.src(JS_SRC)
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(JS_DEST));
});

gulp.task('js:vendor', function() {
  gulp.src([
    'node_modules/material-design-lite/material.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest(JS_DEST));
});

gulp.task('css:main', function(){
  sass(CSS_SRC, { style: 'expanded', bundleExec: true })
  .pipe(autoprefixer())
  .pipe(concatCss('main.css'))
  .pipe(gulp.dest(CSS_DEST));
});

gulp.task('css:vendor', function() {
  gulp.src([
    'node_modules/material-design-lite/material.min.css'
  ])
  .pipe(concatCss('vendor.css'))
  .pipe(gulp.dest(CSS_DEST));
});

gulp.task('build', ['js:main', 'js:vendor', 'css:main', 'css:vendor']);
