import React from 'react';
import contactBg from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';
const ContactUs = () => {
    return (
        <div className='py-16 text-white' style={{backgroundImage: `url(${contactBg})`}}>
            <div className='text-center mb-8'>
                <h6 className='text-lime-400 text-xl font-bold'>Contact Us</h6>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>  
            <div className="hero">
                <div className="w-full max-w-lg">
                    <form className="card-body">
                        <div className="form-control mb-4">
                            <input type="text" placeholder="Email Address" className="text-gray-400 focus:border-2  input input-bordered" />
                        </div>
                        <div className="form-control  mb-4">
                            <input type='text' placeholder="Subject" className="input text-gray-400 input-bordered" />
                        </div>
                        <div className="form-control mb-4">
                            <textarea type="text" placeholder="Your message" className="p-4 text-gray-400 input h-32 resize-none  input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryBtn >Submit</PrimaryBtn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;