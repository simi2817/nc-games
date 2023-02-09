import { Link } from "react-router-dom";


const ReviewCard = ({ review }) => {

  return (
    <div className="ReviewCard">
        <h4>{review.owner}</h4>
        <img src={review.review_img_url} alt={review.title} width="200px" height="200px"/>
        <p>Votes: {review.votes} | Comments: {review.comment_count}</p>
        <Link to={`/reviews/${review.review_id}`}>
        <button>Check this review</button>
        </Link>
    </div>
  )
}

export default ReviewCard;