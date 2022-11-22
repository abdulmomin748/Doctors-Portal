import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        }
    ]
    return (
        <section className='py-16'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h6 className='text-lime-400 text-xl font-bold'>Testimonial</h6>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className='w-52' alt="" srcset="" />
                </figure>
            </div>
            <div className='grid gap-14 grid-cols-1 py-20 lg:grid-cols-3 md:grid-cols-2'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;