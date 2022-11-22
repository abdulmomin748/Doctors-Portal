import React from 'react';
const InfoCard = ({infoCard}) => {
    const {name, description, icon, bgClass} = infoCard;
    return (
        <div className={`text-white px-5 py-10 flex lg:justify-start lg:flex-row md:flex-row flex-col justify-center items-center rounded-md shadow-x ${bgClass}`}>
            <img src={icon} alt="" />
            <div className='ml-5'>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;