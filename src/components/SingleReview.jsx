import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommentsByReviewId, fetchReviewById } from "../utils/api";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const SingleReview = () => {

    const { review_id } = useParams();

    const [selectedReview, setSelectedReview] = useState({});
    
    const [commentsForSelectedReview, setCommentsForSelectedReview] = useState([]);

    const [clickComments, setClickComments] = useState(false);

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    }

    useEffect(() => {
        Promise.all([fetchReviewById(review_id), fetchCommentsByReviewId(review_id)])
        .then(([reviewFromApi,commentsFromApi]) => {
          setSelectedReview(reviewFromApi[0]);
          setCommentsForSelectedReview(commentsFromApi)
        })
    },[review_id]);

    return (
      <div>
        <div style={{margin: 'left'}}>
        <button onClick={goBack}>Back to Reviews</button>
      </div>
      <div>
         <h3>{selectedReview.title}</h3>
         <img src={selectedReview.review_img_url} alt={selectedReview.title} width="500px"/>
         <p>Designer: {selectedReview.designer}</p>
         <p>Owner: {selectedReview.owner}</p>
         <p>Category: {selectedReview.category}</p>
         <p><i>{selectedReview.review_body}</i></p>
         <p>Votes: {selectedReview.votes} | Comments: {selectedReview.comment_count}</p>
         <button>vote</button>
         <br></br>
         <br></br>
        <Link to={`/reviews/${selectedReview.review_id}/comments`}>
            <button onClick={() => setClickComments(current => !current)}>
              Comments
            </button>
        </Link>
        {clickComments ? (<Comments key={commentsForSelectedReview.comment_id} comments={commentsForSelectedReview}/>) : null }
      </div>
      </div>
    )
    }

export default SingleReview;