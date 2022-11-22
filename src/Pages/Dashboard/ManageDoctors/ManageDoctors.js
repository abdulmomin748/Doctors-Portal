import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shered/ConfirmatlionModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDelatingDoctor] = useState(null);

    const closeModal = () =>{
        setDelatingDoctor(null)
    }

    const {data: doctors = [], refetch} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nine-xi.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteDoctor = doctor => {
        console.log(doctor);      
        fetch(`https://doctors-portal-server-nine-xi.vercel.app/doctors/${doctor._id}`, {
             method: 'DELETE',
             headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res => res.json())
        .then(data => {
         console.log(data);
         if(data.deletedCount > 0){
             toast.success(`Doctor ${doctor.name} deleted sucessfully`);
             refetch();
         }
        })
     }

    // console.log(doctors);
    return (
        <div className='p-12 bg-[#F1F5F9]'>
            <h1 className="text-3xl mb-8 font-semibold">Manage Doctors: {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,i) => <tr key={doctor._id} className='hover'>
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor?.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <th className='font-normal'>{doctor?.email}</th>
                                <th className='font-normal'>{doctor?.specialty}</th>
                                <th>
                                    <label htmlFor="confirmationModal" onClick={() => setDelatingDoctor(doctor)} className="btn btn-xs btn-warning">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal 
                    title={`Are you sure you want to delete ${deletingDoctor.name}?`}
                    message={`If you delete ${deletingDoctor.name}. it cannot be undone`}
                    closeModal={closeModal}
                    successFullAction={handleDeleteDoctor}
                    deletingDoctorData={deletingDoctor}
                /> // jodi user thake tahole open hbe
            }                            
        </div>
    );
};

export default ManageDoctors;