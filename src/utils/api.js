import axios from 'axios';

const ncgamesApi = axios.create({ baseURL: 'https://silverfox-ncgames.onrender.com/api' });

export const fetchAllReviews = () => {
    return ncgamesApi.get('/reviews')
    .then(({ data }) => {
        return data.reviews;
    });
}

export const fetchReviewById = (review_id) => {
    return ncgamesApi.get(`/reviews/${review_id}`)
    .then(({ data }) => {
      return data.review
    })
}

export const fetchCommentsByReviewId = (review_id) => {
    return ncgamesApi.get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
        return data.comments
    })
}