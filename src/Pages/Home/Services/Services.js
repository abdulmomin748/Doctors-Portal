import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const serviceData = [
        {
            id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='text-center'>
            <div>
                <h6 className='text-lime-400 text-xl font-bold'>Our Services</h6>
                <h2 className='text-4xl mt-4'>Services We Provide</h2>
            </div>
            <div className='grid gap-5 grid-cols-1 py-20 lg:grid-cols-3 md:grid-cols-2'>
                {
                   serviceData.map(service => <Service key={service.id} service={service} />) 
                }
            </div>
        </div>
    );
};

export default Services;