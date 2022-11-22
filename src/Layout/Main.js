import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Footer/Footer';
import Header from '../Pages/Shered/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );  
};

export default Main;