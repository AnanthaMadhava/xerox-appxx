require("file-loader?name=[name].[ext]!../public/index.html");

import React from "react";
import ReactDOM from "react-dom";

import App from "./app/js/container/App";
import './app/style/xerox-app.scss';

// ReactDOM.render(<App />, document.querySelector("#root")); //react 17 and lesser version need this.

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
