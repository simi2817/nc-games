import axios from 'axios';

const ncgamesApi = axios.create({ baseURL: 'https://silverfox-ncgames.onrender.com/api' });

export const fetchAllReviews = () => {
    return ncgamesApi.get('/reviews')
    .then(({ data }) => {
        return data.reviews;
    });
}