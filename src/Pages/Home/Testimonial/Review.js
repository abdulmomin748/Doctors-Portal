import React from 'react';

const Review = ({review}) => {
    const {name, review:userReview, location, img} = review;
    return (
        <div className="card bg-base-100 shadow-xl px-6 py-8">
            <p>{userReview}</p>
            <div className="mt-8 flex items-center">
                <div className="p-0 avatar">
                    <div className='w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </div>
                </div>
                <div className='ml-4'>
                    <h6 className="card-title">{name}</h6>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;