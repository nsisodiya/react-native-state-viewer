import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function log(connection) {
  connection.onopen = function() {
    // connection is opened and ready to use
    console.log("Connection is ready");
  };

  connection.onerror = function(error) {
    // an error occurred when sending/receiving data
    console.log("Connection has error", error);
  };

  connection.onmessage = function(message) {
    // try to decode json (I assume that each message
    // from server is json)
    try {
      var json = JSON.parse(message.data);
      console.log("Data received from server", json);
    } catch (e) {
      console.log("This doesn't look like a valid JSON: ", message.data);
      return;
    }
    // handle incoming message
  };

}
log(new WebSocket("ws://localhost:12473"));
registerServiceWorker();
