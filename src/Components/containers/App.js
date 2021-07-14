import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../presentationals/Home";
import Products from "../presentationals/Products";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

export default function OliverTakeHome() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products products={products} />
          </Route>
          <Route path="/product/:id/reviews">
            <Reviews />
          </Route>
          <Route path="/product/:id/addReview">
            <AddReview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
