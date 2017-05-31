/**
 * Created by narendrasisodiya on 31/05/17.
 */

import express from "express";
const app = express();
import websocketServer from "./websocketServer";
import proxyServer from "./proxyServer";

app.get("/test", function(req, res) {
  res.send("Testing");
});

proxyServer(app);
websocketServer(app);

const PORT = 12473;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
