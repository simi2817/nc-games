import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const NavBar = () => {

  const userValue = useContext(UserContext);

  return (
    <>
    <nav>
      <a href="index.html">
      <svg id="logo-72" width="52" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#212326"></path> </svg>
      </a>
      <div className="navbar">
          <Link className='navBarLink' to="/">Home</Link>
          <Link className='navBarLink' to="/reviews">Reviews</Link>
          <Link className='navBarLink' to="/categories">Categories</Link>
      {userValue.loggedInUser.username ? 
      (<img className="login-image" align="right" src={userValue.loggedInUser.avatar_url} alt={userValue.loggedInUser.name} width="50px"/>) :
      (<Link className='navBarLink' to="/users">Login</Link>)}
      </div>
    </nav>
    </>
  )
}

export default NavBar;