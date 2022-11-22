import React from 'react';
import lftImg from '../../../assets/images/treatment.png';
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';
const Exceptional = () => {
    return (
        <div className="hero px-4">
            <div className="lg:hero-content lg:flex-row flex-col lg:px-24">
                <img src={lftImg} className="max-w-sm mb-12 lg:mb-0 m-auto rounded-lg shadow-2xl" alt=''/>
                <div className='lg:pl-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br className='lg:block hidden' />Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>get started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;