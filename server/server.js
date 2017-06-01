/**
 * Created by narendrasisodiya on 31/05/17.
 */

import express from "express";
const app = express();
import websocketServer from "./websocketServer";
import proxyServer from "./proxyServer";
import eventBus from "./eventBus";
import applyBodyParser from "./applyBodyParser";

applyBodyParser(app);
app.post("/stateUpdate", function(req, res) {
  const body = JSON.parse(JSON.stringify(req.body));
  res.json({
    success: true
  });
  eventBus.publish("UPDATE_AVAILABLE", body);
});

proxyServer(app);
websocketServer(app);

const PORT = 12473;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
