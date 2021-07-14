import React from "react";
import { Link } from "react-router-dom";

import "../../Styles/Products.scss";

export default function Products({products}) {
  return (
    <section className="products-container">
      {products.map((product) => (
        <div className="product-container">
        <h3 className={`product product-${product.id}`}>
          <span>{product.name}</span>
        </h3>
        <div className="buttons-container">
            <Link to={`/product/${product.id}/reviews`}>
              <button className="view-reviews-btn">view all reviews</button>
            </Link>
            <Link to={`/product/${product.id}/addReview`}>
              <button className="add-review-btn">add reviews</button>
            </Link>
          </div>
      </div>
      ))}
    </section>
  );
}
