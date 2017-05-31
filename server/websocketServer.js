/**
 * Created by narendrasisodiya on 31/05/17.
 */

import EventBus from "@nsisodiya/eventbus";

var evtBus = new EventBus();

export default function websocketServer(app) {
  require("express-ws")(app);

  var commonDb = {
    count: 100
  };

  app.get("/jump", function(req, res) {
    res.send("Jumping Success");
    commonDb.count = commonDb.count + 100;
    evtBus.publish("UPDATE_AVAILABLE");
  });
  app.ws("/", function(ws /*, req*/) {
    console.log("Client initiated Connection Request");
    ws.on("message", function(msg) {
      console.log("Got Message from Client", msg);
    });

    var unsubFunc = evtBus.subscribe("UPDATE_AVAILABLE", function() {
      ws.send(JSON.stringify({ count: commonDb.count }));
    });

    ws.on("close", function() {
      unsubFunc();
      console.log("Stopping client interval");
    });
  });
}
