import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import SignUpForm from '../forms/SignUpForm'

const EditVendorDetails = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flashMessageState, setFlashMessageState] = useState()
    const [flashMessage, setFlashMessage] = useState(null)
    const header = "Edit Personal Details"
    const user_id = localStorage.getItem('user_id')

    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:3000/api/v1/users/${user_id}`, {
            first_name,
            last_name,
            email,
            password
        }).then(response => { 
                setFlashMessage(response.data.message)
                setFlashMessageState('green')
                setTimeout(() => {
                    setFlashMessageState('')
                    history.push("/vendor-dashboard")
                }, 4000)
           
        }).catch(error => {
        const errors = error.response.data.data
            for(error in errors){
                setFlashMessage(error + " " + errors[error][0])
                setFlashMessageState('red')
                setTimeout(() => {
                    setFlashMessageState('')
                }, 4000)
            }
        })
    }
    return(
<>
    {flashMessageState && flashMessage !== null ? 
                <div className='flash_message'>
                    <Message 
                        color={flashMessageState} >
                            {flashMessage}
                    </Message> 
                </div>
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
export default EditVendorDetails