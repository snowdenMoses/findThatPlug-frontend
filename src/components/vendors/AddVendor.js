import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUp from '../../forms/MUI-signup';
import AxiosInstance from '../../authorization/AxiosInstance';
import CustomizedSnackbars from '../CustomizedSnackbar';

const AddVendor = () => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flashMessageState, setFlashMessageState] = useState()
    const [flashMessage, setFlashMessage] = useState(null)
    const header = "Vendor Sign Up"
    const already_have_an_account = "Already have an account?Sign In"
    const action = "Sign Up"

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        AxiosInstance.post("", {
            first_name,
            last_name,
            email,
            password
        }).then(response => {
            console.log(response.data.data)
            localStorage.setItem("token", response.data.token)
            setFlashMessage(response.data.message)
            setFlashMessageState('success')
            setTimeout(() => {
                setFlashMessageState('')
                history.push("/vendor-dashboard")
            }, 4000)

        }).catch(error => {
            const errors = error.response.data.data
            for (error in errors) {
                setFlashMessage(error + " " + errors[error][0])
                setFlashMessageState('error')
                setTimeout(() => {
                    setFlashMessageState('')
                }, 4000)
            }
        })
    }
    return (
        <>
            {flashMessageState && flashMessage !== null ?
                <div className='flash_message'>
                    <CustomizedSnackbars severity={flashMessageState} message={flashMessage}/>
                </div>
                : ""}
            <SignUp
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
                already_have_an_account ={already_have_an_account}
                action={action}
            />
        </>

    )
}
export default AddVendor
