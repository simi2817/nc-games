import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

 
const Comments = ({ setSelectedReview }) => {

  const [comments, setComments] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    fetchCommentsByReviewId(review_id)
    .then((commentsFromApi) => {
      setComments(commentsFromApi);
    })
  },[review_id,comments]);
  
  return (
    <div>
      <div>
        <AddComment review_id={review_id} setComments={setComments} setSelectedReview={setSelectedReview} comments={comments}/>
      </div>
      <div>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} setSelectedReview={setSelectedReview}/>
      })}
      </div>
    </div>
  )
}

export default Comments;