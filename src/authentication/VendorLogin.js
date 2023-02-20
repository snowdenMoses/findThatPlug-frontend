import React, {useState} from 'react'
import SignIn from '../forms/MUI-signin'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import IsCurrentUser from '../authorization/IsCurrentUser'

function VendorLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const header = "Vendor Log In"

  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/authenticate", {
      email,
      password
    }).then(response => {
      localStorage.setItem("token", response.data.token)
      if(response){
        history.push("/vendor-dashboard")
      }
    }).catch(error => alert(error.response.data.error))
  }

  // if(IsCurrentUser) history.push('/vendor-dashboard')
  return (
    <div>
      <SignIn 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        header={header}
      />
    </div>
  )
}

export default VendorLogin