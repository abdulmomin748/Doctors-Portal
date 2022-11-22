import React from 'react';
import doctorUncel from '../../../assets/images/appoinmentImg.png'
import bgAppoinment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';
const MakeAppoinment = () => {
    return (
        <div className="hero mt-24" style={{backgroundImage: `url(${bgAppoinment})`}}>
            <div className="hero-content  lg:flex-row py-0 items-end">
                <img src={doctorUncel} className="max-w-lg hidden lg:block  w-1/2 -mt-40" alt=''/>
                <div className='text-white lg:w-1/2 w-full   py-16'>
                    <h6 className="text-lime-500 text-xl font-bold">Appointment</h6>
                    <h6 className="text-5xl font-bold ">Make an appointment Today</h6>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;