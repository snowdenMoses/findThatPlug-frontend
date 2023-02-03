import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Form, Segment, Message } from 'semantic-ui-react';



const AddUser = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flashMessageState, setFlashMessageState] = useState()
    const [flashMessage, setFlashMessage] = useState("")

    const history = useHistory()

    const handleDismiss = () => {
        setFlashMessageState(true)

        setTimeout(() => {
            setFlashMessageState(false)
        }, 500)
    }

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
            }
            else if (response.AxiosError.request.status === 409) {
                setFlashMessage(response.data.message)
                console.log(response)
            }
                
            

        })
         setFlashMessageState(true)
        // history.push("/all-users")
    }

    return(
<>
    {flashMessageState && flashMessage ? 
                <Message 
                color='green' 
                className='flash_message_state'
                onDismiss={handleDismiss}>
                    {flashMessage}
                </Message> 
    : ""}
        <div className='add_user_form'> 
            <Segment inverted >
                <Form inverted onSubmit={handleSubmit}>
                    <Form.Input fluid 
                    label='First name'
                    placeholder='First name' 
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}/>
                    <Form.Input fluid 
                    label='Last name' 
                    placeholder='Last name' 
                    value={last_name} 
                    onChange={(e) => setLast_name(e.target.value)} />
                    <Form.Input fluid 
                    label='Email' 
                    placeholder='email address' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Input fluid 
                    label='Password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button type='submit'>Add User</Button>
                </Form>
            </Segment>
        </div>
</>

)
    }
export default AddUser
