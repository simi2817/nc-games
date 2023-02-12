import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import DeleteComment from "./DeleteComment";
import VotesForComment from "./VotesForComment";

const CommentCard = ({ comment, setSelectedReview }) => {

  const userValue = useContext(UserContext);
 
  const loggedInUser = userValue.loggedInUser.username;

  const [deleteStatus, setDeleteStatus] = useState(false);

  return (
    <div className="commentCard">
        <h5 className="comment-author">{comment.author}</h5>
        <p className="comment-body">{comment.body}</p>
        <VotesForComment votes={comment.votes} comment_id={comment.comment_id}/>
        {loggedInUser === comment.author ? (
        <button className="delete-comment" onClick={() => setDeleteStatus(true)}>❌remove</button>
        ) : null}
        {deleteStatus ? <DeleteComment comment_id={comment.comment_id} setDeleteStatus={setDeleteStatus} setSelectedReview={setSelectedReview}/> : null}
    </div>
  )
}

export default CommentCard;