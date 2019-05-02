import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ClassesComponents from "./components/ClassesComponents";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<ClassesComponents />, document.getElementById("root"));

serviceWorker.unregister();
