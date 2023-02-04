import React, {useState} from 'react'
import LogInForm from '../forms/LoginForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function VendorLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const header = "Vendor Log In"

  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/v1/authenticate", {
      email,
      password
    }).then(response => {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user_id", response.data.user_id)
      if(response){
        history.push("/vendor-dashboard")
      }
    }).catch(error => alert(error.response.data.error))
  }
  return (
    <div>
      <LogInForm
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