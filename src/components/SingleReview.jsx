import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../utils/api";
import CommentCard from "./CommentCard";


const SingleReview = () => {

    const { review_id } = useParams();

    const [selectedReview, setSelectedReview] = useState({});

    useEffect(() => {
        fetchReviewById(review_id)
        .then((reviewFromApi) => {
          setSelectedReview(reviewFromApi[0]);
        })
    },[review_id]);

    return (
      <div>
         <h3>{selectedReview.title}</h3>
         <img src={selectedReview.review_img_url} alt={selectedReview.title} width="500px"/>
         <p>Designer: {selectedReview.designer}</p>
         <p>Owner: {selectedReview.owner}</p>
         <p>Category: {selectedReview.category}</p>
         <p><i>{selectedReview.review_body}</i></p>
         <p>Votes: {selectedReview.votes} | Comments: {selectedReview.comment_count}</p>
         <button>vote</button>
          <CommentCard/>
      </div>
    )
}

export default SingleReview;