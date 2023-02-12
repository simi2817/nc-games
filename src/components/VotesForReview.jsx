import { useState } from "react";
import { patchVoteReview } from "../utils/api";


const VotesForReview = ({ votes, review_id }) => {

    const [votesChange, setVotesChange] = useState(0);

    const updateVotes = (vote) => {
        setVotesChange((currChange) => currChange + vote);

        patchVoteReview(review_id,vote)
        .catch((err) => {
            console.log(err);
            alert('Oops! something went wrong... please try again!');
            if(votesChange !== 0)
                setVotesChange(0);
        })
    }

  return (
    <div>
        <p>Votes: {votes + votesChange}</p>
        <button className="vote-reviews" disabled={votesChange === 1} onClick={() => updateVotes(1)}>👍</button><button className="vote-reviews" disabled={votesChange === -1} onClick={() => updateVotes(-1)}>👎</button>
    </div>
  )
}

export default VotesForReview;