/**
 * Created by narendrasisodiya on 31/05/17.
 */
import proxy from "express-http-proxy";

export default function proxyServer(app) {
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/index.html"));
  // });

  app.get("/", proxy("http://localhost:12472", {}));
  app.get("/static/*", proxy("http://localhost:12472/static/*", {}));
  app.get("/sockjs-node/*", proxy("http://localhost:12472/sockjs-node/*", {}));
  app.get(
    "/__webpack_dev_server__/*",
    proxy("http://localhost:12472/__webpack_dev_server__/*", {})
  );
}
