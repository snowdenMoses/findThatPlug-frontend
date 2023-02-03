import React from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';



const SignUpForm = (props) => {
    return(
        <>
            <div className='signup_form'> 
                <Header as='h3'>{props.header}</Header>
                <Segment inverted >
                        <Form inverted onSubmit={props.handleSubmit}>
                        <Form.Input fluid 
                                label='First name'
                                placeholder='First name' 
                                value={props.first_name}
                                onChange={(e) => props.setFirst_name(e.target.value)}/>
                        <Form.Input fluid 
                                label='Last name' 
                                placeholder='Last name' 
                                value={props.last_name} 
                                onChange={(e) => props.setLast_name(e.target.value)} />
                        <Form.Input fluid 
                                label='Email' 
                                placeholder='email address' 
                                value={props.email} 
                                onChange={(e) => props.setEmail(e.target.value)}/>
                        <Form.Input fluid 
                                label='Password' 
                                placeholder='Password' 
                                value={props.password} 
                                onChange={(e) => props.setPassword(e.target.value)}/>
                        <Button type='submit'>Add User</Button>
                    </Form>
                </Segment>
            </div>
        </>

)
    }
export default SignUpForm
