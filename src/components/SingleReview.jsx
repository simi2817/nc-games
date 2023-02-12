import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchReviewById } from "../utils/api";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import VotesForReview from "./VotesForReview";
import loadingCircle from '../loading-circle.gif';
import ErrorPage from "./ErrorPage";

const SingleReview = () => {

    const { review_id } = useParams();

    const [selectedReview, setSelectedReview] = useState({});

    const [clickComments, setClickComments] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const goBack = () => {
      navigate('/reviews');
    }

    useEffect(() => {
        setError('');
        fetchReviewById(review_id)
        .then((reviewFromApi) => {
          setSelectedReview(reviewFromApi[0]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading(false);
        })
    },[review_id]);

    if(loading) {
      return (
        <div>
          <img src={loadingCircle} alt="page is loading" width="100px"></img>
        </div>
      )
    }

    if(error) {
      return (
        <>
        <ErrorPage/>
        </>
      )
    }

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
         <p>💬 {selectedReview.comment_count}</p>
        <VotesForReview votes={selectedReview.votes} review_id={review_id}/>
         <br></br>
         <br></br>
        <Link to={`/reviews/${selectedReview.review_id}/comments`}>
            <button onClick={() => setClickComments(current => !current)}>
              Comments
            </button>
        </Link>
        {clickComments ? <Comments setSelectedReview={setSelectedReview}/> : null }
      </div>
      </div>
    )
    }

export default SingleReview;