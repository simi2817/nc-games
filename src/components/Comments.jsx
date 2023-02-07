import CommentCard from "./CommentCard";


const Comments = ({ comments }) => {
  
  return (
    <div>
     {comments.map((comment) => {
      return <CommentCard key={comment.comment_id} comment={comment}/>
     })}
    </div>
  )
}

export default Comments;