import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";

const AddComment = ({ review_id, setComments, setSelectedReview, comments }) => {
    
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    
    const userValue = useContext(UserContext);
    const loggedInUser = userValue.loggedInUser.username;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newComment.length === 0 || /^\s*$/.test(newComment)) {
            alert('Comment box is empty!');
            setLoading(false);
        }         
        else if(loggedInUser && newComment.length > 0) {
            postComment(newComment, review_id, loggedInUser, setLoading)
            .then((commentFromApi) => {
                setComments((currComments) => {
                    return [commentFromApi, ...currComments];
                });
                setNewComment('');
            })
            .catch((err) => {
                console.log(err);
                alert('something went wrong! please try again...');
                setLoading(false);
                if(newComment)
                    setNewComment('');
            });

            setSelectedReview((currReview) => {
            currReview = {...currReview, comment_count: comments.length};
    
            return currReview;
            });

            setSubmitted(true);
        }
        else {
            navigate('/users');
            alert('Please login to add a comment!');
        }
    }
  return (
    <div>
        <br></br>
    <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">
            Add a comment
        </label>
        <br></br>
        <br></br>
        <textarea id="newComment" 
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}>
        </textarea>
        <br></br>
        <button onClick={() => setLoading(true)}>Add</button>
        {loading ? <p>please wait ...</p> : null}
        {submitted ? <p className="comment-submitted">comment successfully submitted!</p> : null}
    </form>
    </div>
  )
}

export default AddComment;