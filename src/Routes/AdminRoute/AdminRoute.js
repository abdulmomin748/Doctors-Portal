import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hook/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className='h-[100vh] flex justify-center items-center'>
             <progress className="progress w-56"></progress>
        </div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace/>
}       
export default AdminRoute;