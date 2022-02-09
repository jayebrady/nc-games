import axios from "axios";

const reviewAPI = axios.create({
  baseURL: "https://jayes-board-games.herokuapp.com/api",
});

export const getCategories = (category_slug) => {
  return reviewAPI.get(`/categories/${category_slug}`).then(({ data }) => {
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
