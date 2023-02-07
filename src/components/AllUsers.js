import React, { useContext, useEffect } from 'react'
import UsersContext from '../context/context_api'

function AllUsers() {
  const [users] = useContext(UsersContext)
  useEffect(()=>{

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