import { format } from 'date-fns';
import el from 'date-fns/esm/locale/el/index.js';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({treatment, setTreatment, selectedDate, refetch}) => {
    const {user} = useContext(AuthContext)
     // tratment is just another name of appoinmentOptions with name, slots, _id
    const {name, price, slots} = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(slot, name, email, phone);

        const booking = {
            appoinmentDate: date,
            treatment: name,
            patient: patientName, // value ar paramerter er nam jodi akoi hoy tahole value na lekhlew chole
            slot,
            email,
            phone,
            price
        }
        if(user){
            fetch('https://doctors-portal-server-nine-xi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    toast.success('Booking Confirmed')
                    setTreatment(null);
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
        }
        else{
            toast.error('Please Log in first!')
        }
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled placeholder={date} className="input input-bordered w-full placeholder:!text-black" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot,i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='patientName' defaultValue={user?.displayName} placeholder='Full Name' className="input input-bordered w-full placeholder:!text-black" disabled required/>
                        <input type="Email" name='email' placeholder='Email' disabled defaultValue={user?.email} className="input input-bordered w-full placeholder:!text-black" required/>
                        <input type='text' name='phone' placeholder='Phone Number' className="input input-bordered w-full placeholder:!text-black" required/>
                        <input type='submit' name='submit' placeholder='Submit' className="uppercase btn-accent input input-bordered w-full cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;