import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Review({ review }) {
  const { author, star_rating, headline, body } = review;

  const displayStarRating = () => {
    const stars = []
    for(let i = 0; i < star_rating; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} color="#ffe82f" />)
    }
    return stars.map((star, i )=> <span key={i}>{star}</span>)
  }

  return (
    <div className="review">
      <h3 className="author">{author}</h3>
      <ul>
        <li><strong>Rating:</strong> {displayStarRating()}</li>
        <li><strong>Headline:</strong> {headline}</li>
        <li className="body"><strong>Review:</strong> {body}</li>
      </ul>
    </div>
  );
}
