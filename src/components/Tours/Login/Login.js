import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    console.log('hello');
    return (
        <div className='login-page d-flex justify-content-center align-items-center'>
        <div className='border-3 border-dark bg-dark w-50 p-5'>
            <h2 className='fs-1 text-warning mb-5'>
                Please Sign In
            </h2>
            <div>
                <a onClick={signInUsingGoogle} className='text-decoration-none g-text'>
                <i class="fab fa-google fs-1 g-icon d-block mb-3"></i>
                <span className='text-info ms-3 '>
                    Sign In With Google.
                </span>
                </a>
            </div>
        </div>
           
        </div>
    );
};

export default Login;