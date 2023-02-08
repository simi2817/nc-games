import { useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/api";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

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
        <p>users are loading.... please wait</p>
      </div>
    )
  }
  return (
      <div>
      <button onClick={goBack}>Back</button>
      {users.map((user) => {
        return <UserCard key={user.username} user={user}/>
      })}
    </div>
  )
}

export default Users;