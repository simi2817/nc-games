

const CommentCard = ({ comment }) => {
  return (
    <div>
        <h5>{comment.author}</h5>
        <p>{comment.body}</p>
        <p>votes: {comment.votes}</p>
        <button>
        vote</button>
    </div>
  )
}

export default CommentCard;