var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

function css () {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
};

// Use this to run automatically when a scss file changes
exports.default = function () {
    watch('src/*.scss', css);
}

// Use this to run by command
// exports.default = css;