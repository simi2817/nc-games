

const ReviewCard = ({ review }) => {

  return (
    <div className="ReviewCard">
        <h4>{review.owner}</h4>
        <img src={review.review_img_url} alt={review.title} width="200px"/>
        <p>Votes: {review.votes} | Comments: {review.comment_count}</p>
        <button>Check this review</button>
    </div>
  )
}

export default ReviewCard;