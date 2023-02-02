import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const AddUser = () => (
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
                <Form.Input fluid label='Email' placeholder='email address' />
                <Form.Input fluid label='Password' placeholder='Password' />
            </Form.Group>
            <Button type='submit'>Sign Up</Button>
        </Form>
    </Segment>
)
export default AddUser
