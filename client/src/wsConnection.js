/**
 * Created by narendrasisodiya on 31/05/17.
 */
var callBackArrays = [];
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
      callBackArrays.forEach(function(callback) {
        callback(json);
      });
      console.log("Data received from server", json);
    } catch (e) {
      console.log("This doesn't look like a valid JSON: ", message.data);
      return;
    }
    // handle incoming message
  };
}
const cc = new WebSocket("ws://localhost:12473");
log(cc);
export default {
  onMessage: function(callback) {
    callBackArrays.push(callback);
  }
};
