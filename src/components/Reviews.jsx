import { useEffect } from "react";
import { useState } from "react";
import { fetchAllReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import loadingCircle from '../loading-circle.gif';


const Reviews = () => {
  
  const queryParameters = new URLSearchParams(window.location.search);

  const category = queryParameters.get('category');

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchAllReviews(category)
      .then((fetchedReviews) => {
        setReviews(fetchedReviews);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong! please try again...");
        setLoading(false);
      })
  },[category]);

  if(loading) {
    return (
      <div>
        <img src={loadingCircle} alt="page is loading" width="100px"></img>
      </div>
    )
  }
  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review}/>
      })}
    </div>
  )
}

export default Reviews;