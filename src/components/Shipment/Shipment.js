import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../SignUp/SignUp.css';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const handleNameBlur = event => {
        setEmail(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Shipping Information </h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="Name" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="Address" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="Phone-number" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

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

export default Shipment;