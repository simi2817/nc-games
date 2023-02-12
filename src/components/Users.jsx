import { useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/api";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
import loadingCircle from '../loading-circle.gif';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchAllUsers()
        .then((usersFromApi) => {
            setUsers(usersFromApi);
            setLoading(false);
        })
    })

    const goBack = () => {
      navigate(-1);
    }
  
  if(loading) {
    return (
      <div>
        <img src={loadingCircle} alt="page is loading" width="100px"></img>
      </div>
    )
  }
  return (
    <div>
      <div>
        <button onClick={goBack}>Back</button>
      </div>
      <div className="users"> 
      {users.map((user) => {
        return <UserCard key={user.username} user={user}/>
      })}
    </div>
    </div>
  )
}

export default Users;