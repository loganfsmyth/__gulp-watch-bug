const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("default", function(){
  watch("./packages/*/package.json", function(){
    gulp.start("thing");
  });
});

gulp.task("thing", function(){
  console.log("thing");
});
