import React from "react";
import ReactDOM from "react-dom/client"

//ELement react.createElement  ==> object ==> HTMLElemt(render)


const heading = React.createElement("h1", { id: "heading" }, "Labbaik ya rasool allah");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
