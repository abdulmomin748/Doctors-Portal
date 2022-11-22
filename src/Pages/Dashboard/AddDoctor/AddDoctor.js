import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shered/Loading/Loading';

const AddDoctor = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_apiKey;
    const naviagate = useNavigate();
    const handleAddDoctor = (data, e) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // const img = imgData.data.url;
                // const thumbImg = imgData.data.thumb.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url,
                }
                
                // save doctors information to the database
                fetch('https://doctors-portal-server-nine-xi.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(doctorAddData => {
                    toast.success(`${data.name} is added successfully`);
                    naviagate('/dashboard/mangedoctors')
                    e.target.reset();
                })
               
            }
        })
    };
    
    

    const {data: spealities = [], isLoading} = useQuery({
        queryKey: ['specialtiy'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nine-xi.vercel.app/appoinmentSpecialty')
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading />
    }
    return (
        <div className='p-12 bg-[#F1F5F9]'>
            <h1 className='text-3xl'>Add a Doctor</h1>
            <div>
            <div className='flex justify-center py-16 pt-5'>
                <div className='max-w-sm w-full shadow-xl px-6 py-8 rounded-xl'>
                    <form  className='' onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control w-full mb-2">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"
                            placeholder='Enter Your Name'
                            {...register("name", {
                                required: "Name is required",
                            })} // second register input filed by type
                            className="input input-bordered w-full" />
                            <p className='text-red-500'>{errors.name?.message}</p>
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                            placeholder='Enter Your Email'
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-10">
                            <label className="label"><span className="label-text">Speciality</span></label>
                            <select {...register("specialty")} className="select w-full">
                                {/* <option >Pick a Speciality</option> */}
                                {
                                    spealities.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full mb-2">
                            <input type="file"
                            placeholder='Upload Your Image'
                            {...register("image", {
                                required: "Photo is Required"
                            })}
                            className="input input-bordered w-full" />
                        </div>
                        <input type="submit" className='cursor-pointer bg-accent mt-4 py-3 text-white w-full rounded-md' value="Add a Doctor" />
                        
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;