import { useEffect } from "react";
import { useState } from "react";
import { fetchAllReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";


const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchAllReviews()
    .then((fetchedReviews) => {
      setReviews(fetchedReviews);
    })
  },[reviews]);

  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review}/>
      })}
    </div>
  )
}

export default Reviews;