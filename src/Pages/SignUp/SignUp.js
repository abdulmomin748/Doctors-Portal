import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hook/useToken';
const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail); // je email ta pachhi seita eikhane diye dichhi(hook e chole jachhe)

    if(token){
        navigate('/')
    }


    const {register, handleSubmit, formState: { errors }} = useForm(); // first declare useForm()
    // console.log(errors)
    const handleSignUp = (data, e) => {
        setSignUpError('')

        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfull!!')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email)
                    
                })
                .catch(err => {console.log(err)})

            e.target.reset();
        })
        .catch(err => {
            console.error(err);
            setSignUpError(err.message)
        })
    }

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('https://doctors-portal-server-nine-xi.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCreateUserEmail(email)
            
        })
        .catch(err => console.log(err))
    }

    // get token from server side*****
    return (
        <div>
            <div className='flex justify-center py-16 pt-40'>
                <div className='max-w-sm w-full shadow-xl px-6 py-8 rounded-xl'>
                    <h2 className='text-3xl text-center'>Sign Up</h2>
                    <form  className='' onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full mb-2">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"
                            {...register("name", {
                                required: "Name is required",
                            })} // second register input filed by type
                            className="input input-bordered w-full" />
                            <p className='text-red-500'>{errors.name?.message}</p>
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {value: 6, message: 'Password must be 6 cherecter long'},
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[@#$&!%^*])(?=.*[0-9])(?=.*[a-z])/, // ^start anchor, $end anchor
                                    message: 'Password must be strong' // AA@@99aa
                                }
                                
                            })}                            
                            className="input input-bordered w-full" />
                            {
                                errors.password && <p className='text-red-500'>{errors.password?.message}</p>
                            }
                        </div>
                        <input type="submit" className='cursor-pointer bg-accent mt-4 py-3 text-white w-full rounded-md' value="Submit" />
                        {signUpError && <p className='text-center text-red-500 mt-2'>{signUpError}</p>}
                    </form>
                    <div className="flex flex-col w-full border-opacity-50 text-center mt-4">
                        <p className='text-sm'>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline w-full">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;