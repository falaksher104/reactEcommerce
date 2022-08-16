import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import CartItems from "./pages/CartItems";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={ProductDetail} />
      <Route exact path="/cartproduct" component={CartItems} />
    </Switch>
  );
}

export default App;
