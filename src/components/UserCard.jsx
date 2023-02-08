import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
    
    const userValue = useContext(UserContext);
    const navigate = useNavigate();

    const userLogin = () => {
      userValue.setLoggedInUser(user);
      navigate('/');
    }

  return (
    <div className="UserCard">
        <h3>{user.username}</h3>
        <img className="user-images" src={user.avatar_url} alt={user.name} width="100px" height="100px"/>
        <p>{user.name}</p>
        <button onClick={userLogin}>login</button>
    </div>
  )
}

export default UserCard;