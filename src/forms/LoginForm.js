import React from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

const LogInForm = (props) => {
    return(
        <>
            <div className='signup_form'> 
                <Header as='h3'>{props.header}</Header>
                <Segment inverted >
                        <Form inverted onSubmit={props.handleSubmit}>
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
                        <Button type='submit'>Login</Button>
                    </Form>
                </Segment>
            </div>
        </>

)
    }
export default LogInForm
