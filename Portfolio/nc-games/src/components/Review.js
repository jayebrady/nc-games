import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReview } from "../utils/api";
import Comments from "./Comments";

const Review = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewsFromApi) => {
      setReview(reviewsFromApi);
    });
  }, [review_id]);

  return (
    <main className="Reviews">
      <ul>
        <li className="Review" key={review.review_id}>
          <h3>{review.title}</h3>
          <p>{review.review_body}</p>
          <p> - {review.owner}</p>
          <img
            className="Review-Img"
            src={review.review_img_url}
            alt="Review"
          />
          <p>{review.category}</p>
          <p>Votes: {review.votes}</p>
        </li>
      </ul>
      <Comments review_id={review.review_id} />
    </main>
  );
};

export default Review;
