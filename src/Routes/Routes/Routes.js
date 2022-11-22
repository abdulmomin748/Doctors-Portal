import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shered/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/appoinment',
                element: <Appoinment />
            }
        ]
    },
    // nested routes
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment />
            },
            {
                path: '/dashboard/myAppoinments',
                element: <MyAppoinment />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute> 
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRoute><AddDoctor /></AdminRoute> 
            },
            {
                path: '/dashboard/mangedoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute> 
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({params}) => fetch(`https://doctors-portal-server-nine-xi.vercel.app/bookings/${params.id}`), // ei route backend er sathe related
            }
        ]
    }
])
export default router;