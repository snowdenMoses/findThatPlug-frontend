import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import SignUpForm from './SignUpForm'



const AddVendor = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flashMessageState, setFlashMessageState] = useState()
    const [flashMessage, setFlashMessage] = useState("")
    const header = "Vendor Sign Up"

    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/api/v1/users", {
            first_name,
            last_name,
            email,
            password
        }).then(response => { 
            if(response.request.status === 201){
                setFlashMessage(response.data.message)
                console.log(response)
                setFlashMessageState(true)
                setTimeout(() => {
                    setFlashMessageState(false)
                }, 4000)
            }
            else if (response.AxiosError.request.status === 409) {
                setFlashMessage(response.data.message)
                console.log(response)
            }
        })
         
        // history.push("/all-users")
    }
    return(
<>
    {flashMessageState && flashMessage ? 
                <Message 
                color='green' 
                className='flash_message_state'>
                    {flashMessage}
                </Message> 
    : ""}
            <SignUpForm
            first_name={first_name}
            setFirst_name={setFirst_name}
            last_name = {last_name}
            setLast_name ={setLast_name}
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleSubmit = {handleSubmit}
            header = {header}
            />
</>

)
    }
export default AddVendor
