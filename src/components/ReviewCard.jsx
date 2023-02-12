import { Link } from "react-router-dom";


const ReviewCard = ({ review }) => {

  return (
    <section className="ReviewCard">
       <p className="review-title"><i>{review.title}</i></p>
        <h4 className="review-owner">👤 {review.owner}</h4>
        <img className="review-img"src={review.review_img_url} alt={review.title}/>
        <p className="review-votes">👍 {review.votes}  💬 {review.comment_count}</p>
        <Link className="read-more" to={`/reviews/${review.review_id}`}>
        <button className="button-reviewcard">Read more</button>
        </Link>
    </section>
  )
}

export default ReviewCard;