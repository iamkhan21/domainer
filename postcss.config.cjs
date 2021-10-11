const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("autoprefixer"),
    require("postcss-import"),
    !dev && require("cssnano")
  ],
};
