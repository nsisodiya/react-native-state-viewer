/**
 * Created by narendrasisodiya on 31/05/17.
 */

export default function websocketServer(app) {
  require("express-ws")(app);
  app.ws("/", function(ws /*, req*/) {
    console.log("Client initiated Connection Request");
    ws.on("message", function(msg) {
      console.log("Got Message from Client", msg);
    });
    let count = 100;
    var id = setInterval(function() {
      count = count + 1;
      ws.send(JSON.stringify({ count }));
    }, 1000);
    ws.on("close", function() {
      console.log("Stopping client interval");
      clearInterval(id);
    });
  });

}
