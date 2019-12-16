const proxy = require("http-proxy-middleware");
 console.log(123)
module.exports = function(app) {
  app.use(
    proxy("/v1", {
      target: "http://api.cangdu.org/",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/shopro", {
      target: "http://api.cangdu.org/",
      changeOrigin: true
    })
  );
};