import React from 'react';
import RegistrationForm from '../features/authentication/components/RegistrationForm'
import { useState } from 'react';
import axiosInstance from '.././lib/axios'
import { useNavigate } from 'react-router-dom';

const Registrationpage = () => {

  

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    is_photographer: false,
    is_user: false,
  });
  
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false); 
  const [successMessage, setSuccessMessage] = useState('');

  // Handle change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for the role select dropdown
    if (name === 'role') {
      if (value === 'Photographer') {
        setFormData({ ...formData, is_photographer: true, is_user: false });
      } else if (value === 'User') {
        setFormData({ ...formData, is_photographer: false, is_user: true });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission and api call ==================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // passwords matching
    if (formData.password !== formData.confirmPassword) {
      setErrors('Passwords do not match');
      return;
    }

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      is_photographer: formData.is_photographer,
      is_user: formData.is_user,
    };

    setLoading(true); 
    setErrors(''); 

    try {
      const response = await axiosInstance.post('register/', data)

      console.log(response.data , 'pppp');
      console.log(data);


      setSuccessMessage('Account created successfully!'); 
      setLoading(false);

      setTimeout(() => {

        navigate(`/otpverify/${data.email}`)
      }, 1000)

    } catch (error) {

     
      console.error(error.response?.data || 'Registration failed');
      console.log(error.response?.data , 'ooooooooo');
      
      setErrors('Registration failed. Please try again.');
      setLoading(false);
    }
  };
  


  return (
<>
  <RegistrationForm
    formData={formData}
    errors={errors}
    loading={loading}
    successMessage={successMessage}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />


  
  

</>
  );
}

export default Registrationpage;
