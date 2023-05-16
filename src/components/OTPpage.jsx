import React, { useState } from 'react';
import axios from 'axios';
import './otp.css'
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
    
    const navigate = useNavigate();

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
    };

    const handleVerifyOTP = () => {
        axios
            .post('http://localhost:4545/otpverify', { otp })
            .then((response) => {
                console.log(response.data.message);
                // Handle successful OTP verification
                if (response.data.message === 'OTP verification successful') {

                    navigate('/login')
                }

            })
            .catch((error) => {
                console.log(error.response.data.error);
                // Handle OTP verification error
            });
    };

    return (
        <div className="otp-container">
            <h2>OTP Verification</h2>
            <input type="text" className="otp-input" value={otp} onChange={handleOTPChange} placeholder="Enter OTP" />
            <button className="verify-button" onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
    );
};

export default OTPVerification;
