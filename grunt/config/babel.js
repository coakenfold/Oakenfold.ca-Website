/* ---------------------------------------------
  @@ babel
================================================ */
module.exports = {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        "development/js/app.js": "deploy/js/app.js"
      }
    }
}