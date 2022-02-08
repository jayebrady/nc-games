import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <main className="Reviews">
      <h2>All Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li className="Review" key={review.review_id}>
              <h3>{review.title}</h3>
              <p>{review.owner}</p>
              <img
                className="Review-Img"
                src={review.review_img_url}
                alt="Review"
              />
              <p>{review.category}</p>
              <p>Votes: {review.votes}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
