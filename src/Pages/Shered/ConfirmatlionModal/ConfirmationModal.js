import React from 'react';

const ConfirmationModal = ({title, message, closeModal, successFullAction, deletingDoctorData}) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    <label htmlFor="confirmationModal" onClick={() => successFullAction(deletingDoctorData)} className="btn btn-md">Ok</label>
                    <button onClick={closeModal} className='btn btn-md btn-warning'>Cancel</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;