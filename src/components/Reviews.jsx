import { useEffect } from "react";
import { useState } from "react";
import { fetchAllReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";


const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews()
    .then((fetchedReviews) => {
      setReviews(fetchedReviews);
      setLoading(false);
    })
  },[reviews]);

  if(loading) {
    return (
      <div>
        <p>loading.... please wait</p>
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