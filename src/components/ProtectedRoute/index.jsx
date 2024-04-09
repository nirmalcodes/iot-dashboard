import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout';

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem('loggedIn')
            ? JSON.parse(localStorage.getItem('loggedIn'))
            : null
    );

    if (!user) {
        return <Navigate to={'/signin'} replace />;
    }

    return <Layout>{children}</Layout>;
};

export default ProtectedRoute;
