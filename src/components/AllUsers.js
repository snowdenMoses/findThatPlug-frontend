import React, { useContext, useEffect } from 'react'
import UsersContext from './context_api'

function AllUsers() {
  const [users, setUsers] = useContext(UsersContext)
  

  useEffect(()=>{
    // console.log("users", users)
  }, [users])
  return (
    <div>{users.map(user=>{
      return(
        <h2>{user.first_name}</h2>
      )
    })}</div>
  )
}

export default AllUsers