import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppoinments
                selectedDate={selectedDate} // JEI DATE TA SELECTED HOY ACHE
            />
        </div>
    );
};

export default Appoinment;