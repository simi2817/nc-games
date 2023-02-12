import { useEffect } from "react";
import { useState } from "react";
import { fetchAllReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import loadingCircle from '../loading-circle.gif';
import { useSearchParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Reviews = () => {
  
  const queryParameters = new URLSearchParams(window.location.search);

  const category = queryParameters.get('category');

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortValue, setSortValue] = useState('');
  const [order, setOrder] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();
  

  const sortReviews = (event) => {
     const queryValue = event.target.value;
     const newParams = new URLSearchParams(searchParams);
     newParams.set('sort_by',queryValue);
     setSearchParams(newParams);
     setSortValue(queryValue);
    
  }

  const orderReviews = (value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('order',value);
    setSearchParams(newParams);
    setOrder(value);
  }

  useEffect(() => {
      fetchAllReviews(category,sortValue,order)
      .then((fetchedReviews) => {
        setReviews(fetchedReviews);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.data.message);
        alert("something went wrong! please try again...");
        setLoading(false);
      })
  },[category,sortValue,order]);

  if(loading) {
    return (
      <div>
        <img src={loadingCircle} alt="page is loading" width="100px"></img>
      </div>
    )
  }
  return (
    <div>
      <div className="dropdown">
        <select className="select" onClick={sortReviews}>
          <option disabled selected>Sort by</option>
          <option value="votes">Most voted</option>
          <option value="created_at">Recent reviews</option>
          <option value="comment_count">Top Comments</option>
          <option value="title">Title</option>
        </select>
        <button className="sorting-button" onClick={() => orderReviews('asc')}>⬇</button><button className="sorting-button" onClick={() => orderReviews('desc')}>⬆</button>
      </div>
      <div className="reviews">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review}/>
      })}
      </div>
      <ScrollToTop/>
    </div>
  )
}
export default Reviews;