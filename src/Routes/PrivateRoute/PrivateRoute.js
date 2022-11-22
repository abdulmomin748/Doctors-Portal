import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    // console.log(children);
    const {user, loading} = useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    if(loading){
        return <div className='h-[100vh] flex justify-center items-center'>
             <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;