import React, { useState } from 'react';
import OtpVerifyFrom from '../features/authentication/components/OtpVerifyFrom';
import axiosInstance from '../lib/axios';
import { useNavigate, useParams } from 'react-router-dom';

const OtpVerifypage = () => {


  const { email } = useParams();
  const [errorMessage, setErrorsMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const navigate = useNavigate();


  const handleChange = (element, index) => {
      if (isNaN(element.value)) return;

      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

      // Focus on next input if filled
      if (element.nextSibling && element.value) {
          element.nextSibling.focus();
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);  
      try {
          const response = await axiosInstance.post('otp_verify/', {
              email: email,
              otp: otp.join(''),
          });

          if (response.data.error) {
              setErrorsMessage(response.data.error);
              setSuccessMessage('');
          } else {
              setErrorsMessage('');
              setSuccessMessage('OTP verified successfully.');

              setTimeout(()=>{

                  navigate('/login');
              },2000)
          }
      } catch (error) {
          console.error('Error during OTP verification:', error);
          setErrorsMessage('An unexpected error occurred. Please try again.');
          setSuccessMessage('');
      } finally {
          setLoading(false);  
      }
  };

  const handleResendOtp = async () => {
      setResendLoading(true);  

      try {
          const response = await axiosInstance.post('resend_otp/', {
              email: email,
          });

          if (response.data.error) {
              setErrorsMessage(response.data.error);
              setSuccessMessage('');
          } else {
              setErrorsMessage('');
              setSuccessMessage('OTP resent successfully.');
          }
      } catch (error) {
          console.error('Error during OTP resend:', error);
          setErrorsMessage('An unexpected error occurred. Please try again.');
          setSuccessMessage('');
      } finally {
          setResendLoading(false);  
      }
  };


  return (
    <div>
        <OtpVerifyFrom
         errorMessage= {errorMessage}
         successMessage={successMessage}
         loading={loading}
         resendLoading={resendLoading}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         handleResendOtp={handleResendOtp}
         otp={otp}

        
        
        />
      
    </div>
  );
}

export default OtpVerifypage;
