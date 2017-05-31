/**
 * Created by narendrasisodiya on 31/05/17.
 */

import express from "express";
const app = express();
import websocketServer from "./websocketServer";
import proxyServer from "./proxyServer";
import commonDb from "./commonDb";
import eventBus from "./eventBus";

app.get("/jump", function(req, res) {
  res.send("Jumping Success");
  commonDb.count = commonDb.count + 100;
  eventBus.publish("UPDATE_AVAILABLE");
});

proxyServer(app);
websocketServer(app);

const PORT = 12473;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
