import React, {useState, useEffect} from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function VendorDashboard() {
  const token = localStorage.getItem('token')
  const [user, setUser] = useState()
  const decoded = jwt_decode(token);
  const user_id = decoded?.user_id

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/users/${user_id}`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [])
  return (
    
    <div>
      {user ?
      <h2> {user?.first_name + " " + user?.last_name + " " + user?.email} </h2>
        : ""}
    </div>
    
  )
}

export default VendorDashboard