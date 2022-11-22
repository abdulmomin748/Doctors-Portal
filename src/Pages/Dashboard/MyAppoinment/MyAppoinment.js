import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppoinment = () => {
    const {user} = useContext(AuthContext);
    const { data: bookings = []} = useQuery({ // eikhane data pabo
        queryKey: ['bookings', user?.email], // kiser upor depend korbe
        queryFn: async() => {
            const res = await fetch(`https://doctors-portal-server-nine-xi.vercel.app/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);
    return (
        <div className='p-12 bg-[#F1F5F9]'>
            <h1 className="text-3xl mb-8">My Appointment</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings && 
                        bookings?.map((booking, i) => <tr key={i} className="hover">
                            <th>{i + 1}</th>
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appoinmentDate}</td>
                            <td>{booking.slot}</td>
                            <td>
                                {
                                    booking?.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm text-white font-bold'>Pay</button></Link>
                                }
                                {
                                    booking?.price && booking.paid && <span className='text-primary font-bold'>Paid</span>
                                }
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyAppoinment;