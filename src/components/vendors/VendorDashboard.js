import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import AxiosInstance from '../../authorization/AxiosInstance';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Dashboard from '../../dashboard/Dashboard'

function VendorDashboard() {
  const token = localStorage.getItem('token')
  const [user, setUser] = useState(null)
  const decoded = jwt_decode(token);
  const user_id = decoded?.user_id

  useEffect(() => {
    AxiosInstance
      .get(`/${user_id}`)
      .then((res) => {
        setUser(res.data)
        console.log("user",res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token])
  if(!user)<div>Loading</div>
  return (
    <>
    <CssBaseline />
      <Container fixed>
        {/* <div>
          {user ?
            <h2> {user?.first_name + " " + user?.last_name + " " + user?.email} </h2>
            : ""}
        </div> */}
        <Dashboard/>
      </Container>
    </>
    
    
  )
}

export default VendorDashboard