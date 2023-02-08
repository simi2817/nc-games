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

export const patchVoteReview = (review_id, vote) => {
    
    const patchBody = {
        inc_votes: vote
    };

    return ncgamesApi.patch(`/reviews/${review_id}`, patchBody)
    .then(({ data }) => {
        return data.review;
    })
}

export const fetchAllUsers = () => {
    return ncgamesApi.get('/users')
    .then(({ data }) => {
        return data.users;
    })
}

export const postComment = (newComment, review_id, loggedInUser, setLoading) => {
    const postBody = {
        username: loggedInUser,
        body: newComment
    };
    return ncgamesApi.post(`/reviews/${review_id}/comments`, postBody)
    .then(({ data }) => {
        setLoading(false);
        return data.comment;
    })
}