/**
 * Created by narendrasisodiya on 31/05/17.
 */

import eventBus from "./eventBus";
export default function websocketServer(app) {
  require("express-ws")(app);
  app.ws("/", function(ws /*, req*/) {
    console.log("Client initiated Connection Request");
    ws.on("message", function(msg) {
      console.log("Got Message from Client", msg);
    });

    var unsubFunc = eventBus.subscribe("UPDATE_AVAILABLE", function(body) {
      ws.send(JSON.stringify(body));
    });

    ws.on("close", function() {
      unsubFunc();
    });
  });
}
