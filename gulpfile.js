const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const minify = require("gulp-minify");

// Minify CSS
gulp.task("css", () =>
	gulp
		.src(["src/*.css"])
		.pipe(cssnano())
		.pipe(
			rename({
				suffix: ".min"
			})
		)
		.pipe(gulp.dest("dist/css"))
);

// Minify JavaScript
gulp.task("compress", () => {
	gulp
		.src("src/*.js")
		.pipe(
			minify({
				ext: {
					src: "-debug.js",
					min: ".js"
				},
				exclude: ["tasks"],
				ignoreFiles: [".combo.js", "-min.js"]
			})
		)
		.pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["css", "compress"]);
