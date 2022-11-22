import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Openning Hours',
            description: 'Open 9.00 am to  5.00pm everyday',
            icon: icon1,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: icon2,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: icon3,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        }
    ]
    return (
        <div className='grid gap-5 grid-cols-1 py-20 lg:grid-cols-3 md:grid-cols-2'>
            {
                cardData.map(infoCard => <InfoCard key={infoCard.id} infoCard={infoCard} />)
            }
        </div>
    );
};

export default InfoCards;