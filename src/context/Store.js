import React, { useState, useEffect } from 'react'
import UsersContext from './context_api'
import axios from 'axios'
function Store({ children }) {
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get('/api/v1/users')
            .then((res) => {
                setUsers(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

        axios
            .get('/api/v1/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <UsersContext.Provider value={[users, products]}>
            {children}
        </UsersContext.Provider>
    )
}
export default Store