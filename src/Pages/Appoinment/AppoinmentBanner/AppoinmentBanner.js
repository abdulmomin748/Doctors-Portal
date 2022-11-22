import React  from 'react';
import appoinmentBnr from '../../../assets/images/bg.png';
import appoinmentBnrRgtImg from '../../../assets/images/chair.png';

import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero" style={{backgroundImage: `url(${appoinmentBnr})`}}>
            <div className="hero-content max-w-full flex-col min-h-[80vh] lg:flex-row-reverse py-28">
                <img src={appoinmentBnrRgtImg} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='pr-20'>
                    <div className='bg-white p-4 rounded-lg shadow-xl'>
                        <DayPicker 
                            mode="single"
                            selected={selectedDate} // JEITA SELECTED HOY THAKBE(JEITA SELEC KORECHI ALREADY)
                            onSelect={setSelectedDate} // JEIKHAE NOTUTN KORE SELECT KORBO DATE
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AppoinmentBanner;