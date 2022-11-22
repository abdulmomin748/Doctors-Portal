import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hook/useAdmin';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);

    return (
        <>
            <Navbar />{/*Top part(header)*/}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content"> {/*right part      ---- layout changeble*/}
                    <Outlet />
                </div> 
                <div className="drawer-side"> {/*left part*/}
                    <label className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/myAppoinments'>My Appoinments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctors'>Add a Doctors</Link></li>
                                <li><Link to='/dashboard/mangedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;