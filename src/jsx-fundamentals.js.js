import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  console.log(props);
  // example of an expression
  // {props.version} - basic example
  // {props.version !== "1" ? ... terany operation example
  // tabIndex={1 + 1} - attribute with expression
  return (
    <div className="App" tabIndex={1 + 1}>
      <h1>Hello CodeSandbox {props.version}</h1>
      <h1>
        Hello CodeSandbox{" "}
        {props.version !== "1" ? "Invalid Version" : props.version}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App version="1.0" />, rootElement);
