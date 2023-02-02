import React, { useState, useEffect } from 'react'
import UsersContext from './context_api'
import axios from 'axios'
function Store({ children }) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/v1/users')
            .then((res) => {
                setUsers(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {children}
        </UsersContext.Provider>
    )
}
export default Store