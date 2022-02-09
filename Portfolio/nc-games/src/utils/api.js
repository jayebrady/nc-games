import axios from "axios";

const reviewAPI = axios.create({
  baseURL: "https://jayes-board-games.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewAPI.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = () => {
  return reviewAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const getReview = (review_id) => {
  return reviewAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};
