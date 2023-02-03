import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'



const AddUser = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        // alert(first_name + last_name + email + password)
        axios.post("http://localhost:3000/api/v1/users", {
            first_name,
            last_name,
            email,
            password
        }).then(response => console.log(response))
        const Message = () => (
            <FlashMessage duration={5000}>
                <strong>I will disapper in 5 seconds!</strong>
            </FlashMessage>
        )

        render(Message, document.body);
        // history.push("/all-users")
    }

    return(
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
)
    }
export default AddUser
