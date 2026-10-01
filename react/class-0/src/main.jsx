import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import './index.css'
// import Try, {H1} from "./Try";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Try/>
    {H1} */}
  </React.StrictMode>
);