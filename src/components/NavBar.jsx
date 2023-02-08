import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const NavBar = () => {

  const userValue = useContext(UserContext);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      {userValue.loggedInUser.username ? 
      (<img className="login-image" align="right" src={userValue.loggedInUser.avatar_url} alt={userValue.loggedInUser.name} width="50px"/>) :
      (<Link to="/users">Login</Link>)}
      </div>
    </nav>
  )
}

export default NavBar;