import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment }) => {

  const userValue = useContext(UserContext);
 
  const loggedInUser = userValue.loggedInUser.username;

  const [deleteStatus, setDeleteStatus] = useState(false);

  return (
    <div>
        <h5>{comment.author}</h5>
        <p>{comment.body}</p>
        <button>
        ❤️ {comment.votes}</button>
        {loggedInUser === comment.author ? (
        <button onClick={() => setDeleteStatus(true)}>delete</button>
        ) : null}
        {deleteStatus ? <DeleteComment comment_id={comment.comment_id} setDeleteStatus={setDeleteStatus}/> : null}
    </div>
  )
}

export default CommentCard;