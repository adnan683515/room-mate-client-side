import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate } from 'react-router';


const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) return <div className='flex justify-center py-20  items-center'> <h1 className="loading loading-spinner text-success"></h1> </div>

    if (user) return children;

    return (
        <Navigate to={'/login'} > </Navigate>
    );
};

export default PrivetRouter;