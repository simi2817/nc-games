import { useEffect, useState } from "react";
import { deleteComment } from "../utils/api";

import loadingCircle from '../loading-circle.gif';

const DeleteComment = ({ comment_id, setDeleteStatus, setSelectedReview }) => {

  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    deleteComment(comment_id)
    .then(() => {
      setDeleteStatus(false);
      setDeleting(false);
      setSelectedReview((currReview) => {
        const updatedReview = {...currReview, comment_count: currReview.comment_count - 1};
    
        return updatedReview;
      });

      alert('comment deleted successfully!');
    })
    .catch((err) => {
      console.log(err);
      alert('something went wrong! please try again...');
      setDeleting(false);
    });

  },[comment_id, setDeleteStatus, setSelectedReview]);


  if(deleting) {
  return (
    <div>
      <img src={loadingCircle} alt="page is loading" width="20px"></img>
    </div>
  )
  }

  return (
    <></>
  )

}

export default DeleteComment;