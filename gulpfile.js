const gulp = require("gulp");
const cp = require("child_process");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const cssnext = require("postcss-cssnext");
const BrowserSync = require("browser-sync");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf");

const { series, parallel, watch } = gulp;

const browserSync = BrowserSync.create();
const hugoBin = "hugo";
const defaultArgs = ["-d", "../dist", "-s", "site", "-v"];

// --- Hugo Build ---
function buildSite(options = []) {
  const args = defaultArgs.concat(options);
  return function (cb) {
    cp.spawn(hugoBin, args, { stdio: "inherit" })
      .on("close", (code) => {
        if (code === 0) {
          browserSync.reload();
          cb();
        } else {
          browserSync.notify("Hugo build failed :(");
          cb("Hugo build failed");
        }
      });
  };
}

const hugo = buildSite();
const hugoPreview = buildSite(["--buildDrafts", "--buildFuture"]);

// --- CSS ---
function css() {
  return gulp.src("./src/css/*.css")
    .pipe(postcss([cssImport({ from: "./src/css/main.css" }), cssnext()]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

// --- JS (Webpack) ---
function js(cb) {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) {
      cb(err);
      return;
    }
    console.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true,
      })
    );
    browserSync.reload();
    cb();
  });
}

// --- Server / Watchers ---
function server() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  watch("./src/js/**/*.js", js);
  watch("./src/css/**/*.css", css);
  watch("./site/**/*", hugo);
}

// --- Build tasks ---
const build = series(css, js, hugo);
const buildPreview = series(css, js, hugoPreview);

// Export tasks (Gulp 4)
exports.hugo = hugo;
exports.hugoPreview = hugoPreview;
exports.css = css;
exports.js = js;
exports.server = series(build, server);
exports.build = build;
exports.buildPreview = buildPreview;
exports.default = series(build, server);
