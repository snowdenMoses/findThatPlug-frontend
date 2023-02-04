import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const RedirectLogin = (props) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        }
        try {
            setAuthenticated(true);
        } catch (err) {
            setError(err.message);
        }
    }, []);

    if (error) {
        return <Redirect to='/vendor-dashboard' />
    }

    if (authenticated) {
        return props.children;
    }
}

export default RedirectLogin;
