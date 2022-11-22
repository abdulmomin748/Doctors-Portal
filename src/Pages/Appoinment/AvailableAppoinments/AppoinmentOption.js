import React from 'react';

const AppoinmentOption = ({appoinmentOption, setTreatment}) => {
    console.log(appoinmentOption);
    const {name, price, slots} = appoinmentOption;
    return (
        <div className='card shadow-2xl text-center py-10'>
            <h3 className='text-xl font-semibold text-secondary mb-2'>{name}</h3>
            <p className='mb-1'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
            <p  className='mb-4'><small>price: ${price}</small></p>
            <div>
                <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(appoinmentOption)} className="disabled:!text-white disabled:!opacity-100 bg-gradient-to-r from-secondary to-primary btn btn-primary text-white">Book Appoinment</label> {/*jei option gulo dekte pachhi seitay abar modal e patachhi*/}
            </div>
        </div>
    );
};

export default AppoinmentOption;