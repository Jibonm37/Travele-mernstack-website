import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect)
        })
    }
    console.log('hello');
    return (
        <div className='login-page d-flex justify-content-center align-items-center'>
        <div className='border-3 border-dark bg-dark w-50 p-5'>
            <h2 className='fs-1 text-warning mb-5'>
                Please Sign In
            </h2>
            <div>
                <a onClick={ handleGoogleLogin } className='text-decoration-none g-text'>
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