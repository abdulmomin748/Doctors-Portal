import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shered/Loading/Loading';

const AllUsers = () => {
    // const { user } = useContext(AuthContext);
    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            // query dite hbe name value paris,  shudhu value dile hbena
            const res = await fetch(`https://doctors-portal-server-nine-xi.vercel.app/users`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    
    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-nine-xi.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful.');
                refetch();
            }
        });
    };

    // if(isLoading){
    //     return <Loading />
    // }
    return (
        <div className='p-12 bg-[#F1F5F9]'>
            <h1 className="text-3xl mb-8">All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,i) => <tr key={user._id} className='hover'>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</th>
                                <th><button className='btn btn-xs btn-warning'>Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;