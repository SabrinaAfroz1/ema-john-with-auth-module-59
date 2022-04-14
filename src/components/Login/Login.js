import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Login Form</h1>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {loading && <p>Loading . . . . </p>}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='link-bar'>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link>
                </p>
                <div className='bar-line'>
                    <div className='bar'>

                    </div>

                    <div className='bar-word'>
                        OR
                    </div>


                    <div className='bar'>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;