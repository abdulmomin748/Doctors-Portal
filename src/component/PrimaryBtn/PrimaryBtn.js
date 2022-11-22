import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white">{children}</button>
    );
};

export default PrimaryBtn;