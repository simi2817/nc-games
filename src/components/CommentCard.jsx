import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import DeleteComment from "./DeleteComment";
import VotesForComment from "./VotesForComment";

const CommentCard = ({ comment, setSelectedReview }) => {

  const userValue = useContext(UserContext);
 
  const loggedInUser = userValue.loggedInUser.username;

  const [deleteStatus, setDeleteStatus] = useState(false);

  return (
    <div>
        <h5>{comment.author}</h5>
        <p>{comment.body}</p>
        <VotesForComment votes={comment.votes} comment_id={comment.comment_id}/>
        {loggedInUser === comment.author ? (
        <button onClick={() => setDeleteStatus(true)}>delete</button>
        ) : null}
        {deleteStatus ? <DeleteComment comment_id={comment.comment_id} setDeleteStatus={setDeleteStatus} setSelectedReview={setSelectedReview}/> : null}
    </div>
  )
}

export default CommentCard;