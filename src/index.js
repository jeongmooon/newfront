import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import EditProvider from "./context/providers/EditProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EditProvider>
        <App />
      </EditProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
