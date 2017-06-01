import React, { Component } from "react";
import "./App.css";
import JsonViewer from "react-json-viewer";
import StateViewer from "./StateViewer";

function JSONRender(data) {
  return (
    <center>
      <JsonViewer
        style={{
          border: "1px solid black"
        }}
        json={data}
      />
    </center>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Native State Viewer</h2>
        </div>
        <StateViewer render={JSONRender} />
      </div>
    );
  }
}

export default App;
