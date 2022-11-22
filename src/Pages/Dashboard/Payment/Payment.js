import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shered/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK); // client theke publishable API key. jabe
console.log(stripePromise);

const Payment = () => {
    const navigation =useNavigation();
    const {user} = useContext(AuthContext);
    const booking = useLoaderData();
    const {appoinmentDate, email, patient, phone, price, slot, treatment} = booking;
    if(navigation.state === 'loading'){
        return <Loading /> 
    }
    return (
        <div className='p-12 bg-[#F1F5F9]'>
            <h6 className='font-semibold text-xl'>Hellow, {user.displayName}</h6>
            <h1 className="text-3xl mb-4 font-semibold">Payment for {booking.treatment}</h1>
            <p>Please pay <strong>${booking.price}</strong> for your appoinment on <strong>{appoinmentDate}</strong> at <strong>{slot}</strong></p>
            <div className='max-w-md mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}  />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;