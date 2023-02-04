import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import SignUpForm from '../../forms/SignUpForm'
import jwt_decode from "jwt-decode";
import AxiosInstance from '../../authorization/AxiosInstance';

const EditVendorDetails = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flashMessageState, setFlashMessageState] = useState()
    const [flashMessage, setFlashMessage] = useState(null)
    const header = "Edit Personal Details"
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token);
    const user_id = decoded?.user_id

    const history = useHistory()
    const findRecords = () => {
        AxiosInstance
            .get(`/${user_id}`)
            .then((res) => {
                setFirst_name(res.data.first_name)
                setLast_name(res.data.last_name)
                setEmail(res.data.email)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        AxiosInstance.patch(`/${user_id}`, {
            first_name,
            last_name,
            email,
            password
        }).then(response => {
            console.log("response", response)
            setFlashMessage(response.data.message)
            setFlashMessageState('green')
            setTimeout(() => {
                setFlashMessageState('')
                history.push("/vendor-dashboard")
            }, 4000)

        }).catch(error => {
            const errors = error.response.data.data
            for (error in errors) {
                setFlashMessage(error + " " + errors[error][0])
                setFlashMessageState('red')
                setTimeout(() => {
                    setFlashMessageState('')
                }, 4000)
            }
        })
    }

    useEffect(() => {
        findRecords()
    }, [])
    return (
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
                last_name={last_name}
                setLast_name={setLast_name}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                header={header}
            />
        </>

    )
}
export default EditVendorDetails
