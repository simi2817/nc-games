

const CommentCard = ({ comment }) => {
  return (
    <div>
        <h5>{comment.author}</h5>
        <p>{comment.body}</p>
        <button>
        ❤️ {comment.votes}</button>
    </div>
  )
}

export default CommentCard;