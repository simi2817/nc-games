import { useState } from "react";
import { patchVoteComment } from "../utils/api";


const VotesForComment = ({ votes, comment_id }) => {

    const [votesChange, setVotesChange] = useState(0);

    const updateVotes = (vote) => {
        setVotesChange((currChange) => currChange + vote);

        patchVoteComment(comment_id, vote)
        .catch((err) => {
            console.log(err);
            alert('Oops! something went wrong... please try again!');
            if(votesChange !== 0)
                setVotesChange(0);
        });
    }

  return (
    <div>
        <p>Votes: {votes}</p>
        <button disabled={votesChange === 1} onClick={() => updateVotes(1)}>
        ❤️</button>
        <button disabled={votesChange === -1} onClick={() => updateVotes(-1)}>
        💔</button>
    </div>
  )
}

export default VotesForComment;