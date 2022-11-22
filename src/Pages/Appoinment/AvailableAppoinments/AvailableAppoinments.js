import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shered/Loading/Loading';

const AvailableAppoinments = ({selectedDate}) => {

    // akhne specific appoinmentOption gulo pacche, jehatu amader dui siblings er majhe sher korar lagbe data,jeikhne state seikhnae event handler
    const [treatment, setTreatment] = useState(null); 
    // default value dewar lagbe[], na hole error dibe, jahatu kono kono kichu initially pachhena data hisebe map korar jonno
    const date = format(selectedDate, 'PP');
    const {data: appoinmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appoinmentOptions', date], // eikhane date change hoyle , abar data load hochhe
        queryFn: async() => {
            const res = await fetch(`https://doctors-portal-server-nine-xi.vercel.app/appoinmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading />
    }

    return (
        <div className='py-20'>
            <p className='text-center text-xl text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-5 grid-cols-1 py-20 lg:grid-cols-3 md:grid-cols-2'>
                {
                   appoinmentOptions.map(option => <AppoinmentOption setTreatment={setTreatment} key={option._id} appoinmentOption={option} />) 
                }
            </div>
            {
                treatment && <BookingModal refetch={refetch} treatment={treatment}  setTreatment={setTreatment} selectedDate={selectedDate} />
            }
        </div>
    );
};

export default AvailableAppoinments; 
