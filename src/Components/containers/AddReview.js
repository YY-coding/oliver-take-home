import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../../Styles/AddReview.scss";

export default function AddReview() {
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [starRating, setStarRating] = useState(1);
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (author.length <= 0 && headline.length <= 0 && body.length <= 0) {
      setErrMsg("Please fill in all fields!");
      return false;
    }

    axios({
      method: "post",
      url: `http://localhost:3004/products/${id}/reviews`,
      data: {
        author: author,
        star_rating: starRating,
        headline: headline,
        body: body,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAuthor("");
    setStarRating(0);
    setHeadline("");
    setBody("");
    setErrMsg("");
  };

  return (
    <div>
      <p className="err-msg">{errMsg}</p>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={({ target }) => setAuthor(target.value)}
            name="name"
            id="name"
            value={author}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            onChange={({ target }) => setStarRating(target.value)}
            value={starRating}
            name="rating"
            id="rating"
            type="number"
            min="1"
            max="5"
          />
        </div>
        <div>
          <label htmlFor="headline">Headline: </label>
          <input
            onChange={({ target }) => setHeadline(target.value)}
            value={headline}
            name="headline"
            id="headline"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="review">Reviews: </label>
          <textarea
            onChange={({ target }) => setBody(target.value)}
            value={body}
            name="review"
            id="review"
          />
        </div>
        <input type="submit" value="submit review" />
      </form>
    </div>
  );
}
