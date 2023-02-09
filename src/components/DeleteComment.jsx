import { useEffect, useState } from "react";
import { deleteComment } from "../utils/api";



const DeleteComment = ({ comment_id, setDeleteStatus }) => {

  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    deleteComment(comment_id)
    .then(() => {
      setDeleteStatus(false);
      setDeleting(false);
      alert('comment deleted successfully!');
    })
    .catch((err) => {
      console.log(err);
      alert('something went wrong! please try again...');
      setDeleting(false);
    });

    if(deleting)
    alert('request in progress....')
    
  },[comment_id, setDeleteStatus]);

  return (
    <></>
  )

}

export default DeleteComment;