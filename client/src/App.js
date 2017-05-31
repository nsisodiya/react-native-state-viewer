import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import JsonViewer from "react-json-viewer";
import StateViewer from "./StateViewer";

function JSONRender(data) {
  return <JsonViewer json={data} />;
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
