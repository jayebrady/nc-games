import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <main className="Comments">
      <h2>All Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Comments;
