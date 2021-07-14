import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Review from "../presentationals/Review";
import "../../Styles/Reviews.scss";

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = useCallback(() => {
    axios
      .get(`http://localhost:3004/products/${id}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (reviews.length === 0) {
    return (
      <p className="no-review-msg">There's no reviews for this product!</p>
    );
  }

  return (
    <section className="reviews-container">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}
