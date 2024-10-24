import React from 'react';
import Logo from '../assets/images/logo.png.png'
import { Alert, Stack, CircularProgress } from '@mui/material';

const OtpVerifyFrom = ({
   errorMessage,
    successMessage,
    loading,
    resendLoading,
    handleChange,
    handleSubmit,
    handleResendOtp,
    otp,
}) => {
      


    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1F485B] to-[#496D7E]">
                <div className="mb-8">
                    <img src={Logo} alt="PoshPic Logo" className="h-24 w-auto" />
                </div>

                {/* OTP Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
                    <h2 className="text-2xl font-Vollkorn text-center mb-4 text-[#1F485B]">Verify OTP</h2>
                    <p className="text-gray-600 text-center mb-6">Enter the 4-digit OTP sent to your email</p>

                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center space-x-2 mb-6">
                          
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-12 h-12 text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F485B] rounded"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>

                        {/* Submit Button with Loading Spinner */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#1F485B] text-white rounded-lg hover:bg-[#16413F] transition duration-300 flex justify-center items-center"
                            disabled={loading}  
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify'}
                        </button>

                        {/* Display Errors */}
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            {errorMessage && (
                                <Alert severity="error">
                                    {errorMessage}
                                </Alert>
                            )}
                        </Stack>

                        {/* Display Success Message */}
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            {successMessage && (
                                <Alert severity="success">
                                    {successMessage}
                                </Alert>
                            )}
                        </Stack>
                    </form>

                    {/* Resend OTP Button */}
                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Didn't receive the OTP?{" "}
                            <span
                                className="text-[#1F485B] cursor-pointer"
                                onClick={handleResendOtp}
                                style={{ cursor: resendLoading ? 'not-allowed' : 'pointer' }}
                            >
                                {resendLoading ? (
                                    <CircularProgress size={16} />
                                ) : (
                                    "Resend"
                                )}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpVerifyFrom;
