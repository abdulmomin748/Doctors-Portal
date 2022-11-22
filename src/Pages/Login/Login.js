import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hook/useToken';
    
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const {register, formState: { errors },handleSubmit} = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail); // token ta hook theke return kore dibe processing kore
    
    if(token){
        navigate(from, {replace: true});
    }

    const handleLogin = (data, e) => {
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
            e.target.reset();
        })
        .catch(err => {
            console.log(err.message);
            setLoginError(err.message)
        })
    }
    return (
        <div className='flex justify-center py-16 pt-40'>
            <div className='max-w-sm w-full shadow-xl px-6 py-8 rounded-xl'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className=''>
                    <div className="form-control w-full mb-2">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                        {...register("email", {
                            required: 'Email Address is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })
                        }
                        className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-500 font-semibold'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                        {...register("password",{
                            required: 'Password is required',
                            minLength: {value: 6, message: 'Password muste be 6 cherecter long.'},
                            pattern: {
                                value: /^(?=.*[0-9]).*$/, 
                                message: 'Insert at least one number'
                            }
                        })
                        }
                        className="input input-bordered w-full" />
                        <label className="label p-0">
                            <Link to='' className="label-text-alt">Forget Passwod</Link>
                        </label>
                        {errors.password && <p role="alert" className='text-red-500 font-semibold'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className='cursor-pointer bg-accent mt-4 py-3 text-white w-full rounded-md' value="Submit" />
                    <div>
                        {loginError && <p className='text-red-500 text-center mt-2'>{loginError}</p>}
                    </div>
                </form>
                <div className="flex flex-col w-full border-opacity-50 text-center mt-4">
                    <p className='text-sm'>New to Doctors Portal? <Link to='/signup' className='text-primary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};
    
export default Login;