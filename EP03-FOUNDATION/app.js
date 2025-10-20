import React from "react";
import ReactDOM from "react-dom/client";

// Element react.createElement ==> object ==> HTML element (render)
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
