var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    clean = require("gulp-clean");

gulp.task("clean", function(){
    return gulp.src("dist")
        .pipe(clean());
});

gulp.task("copy", ["clean"], function(){
    return gulp.src("src/**/*")
        .pipe(gulp.dest("dist"));
});

gulp.task("build-img", ["copy"], function(){
    
    gulp.src("dist/demo/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/demo/"));

});