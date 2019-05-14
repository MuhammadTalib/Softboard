import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ClassesComponents from "./components/ClassesComponents";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import CreateClassForm from "./CreateClassForm";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
