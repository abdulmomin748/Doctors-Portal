import React from 'react';
import bannRgtImg from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png'
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';
const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage: `url(${bannerBg})`}}>
            <div className="hero-content max-w-full flex-col min-h-[80vh] lg:flex-row-reverse py-28 justify-between">
                <img src={bannRgtImg} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='pr-5'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;