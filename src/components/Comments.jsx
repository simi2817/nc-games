import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";


const Comments = () => {

  const [comments, setComments] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    fetchCommentsByReviewId(review_id)
    .then((commentsFromApi) => {
      setComments(commentsFromApi);
    })
  },[review_id]);
  
  return (
    <div>
     {comments.map((comment) => {
      return <CommentCard key={comment.comment_id} comment={comment}/>
     })}
    </div>
  )
}

export default Comments;