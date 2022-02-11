import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const { review_id } = useParams();

  useEffect(() => {
    getReviews(review_id, sort_by).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [review_id, sort_by]);

  return (
    <main className="Reviews">
      <h2>All Reviews</h2>
      <button onClick={() => setSort_by("created_at")}>Date</button>
      <button onClick={() => setSort_by("votes")}>Votes</button>
      <button onClick={() => setSort_by("owner")}>User</button>
      <ul>
        {reviews.map((review) => {
          return (
            <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
              <li className="Review">
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
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
