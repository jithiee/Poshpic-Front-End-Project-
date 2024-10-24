import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';

import logo from '../assets/images/logo.png.png';
import camaraman from '../assets/images/signupimage.png.png';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const RegistrationForm = ({
  formData ,
  errors,
  loading,
  successMessage ,
  handleChange,
  handleSubmit,
}) => {

  

  return (
    
    <div className="min-h-screen bg-[#496D7E] flex justify-center items-center py-8">
      <div className="h-auto md:h-[550px] w-full lg:w-[65%] flex justify-center items-center">
        <div className="bg-[#1F485B] h-auto md:h-[550px] w-full flex justify-between relative">
          {/* Left Section - Logo and Image */}
          <span className="flex justify-start">
            <img src={logo} alt="logo" className="w-auto md:h-[150px]" />
            <img
              src={camaraman}
              alt="cameraman"
              className="z-0 object-contain h-[200px] md:h-[400px] lg:h-[500px] hidden md:block mt-12"
            />
          </span>

          {/* Right Section - Form */}

          <div className="bg-white h-auto md:h-[550px] w-full lg:w-[60%] flex flex-col justify-center rounded-tl-2xl rounded-bl-lg p-4 md:p-8">
            <h2 className="font-Vollkorn mb-4 text-3xl md:text-3xl text-center">
              Create Account
            </h2>

            {/* Form Fields */}


            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 z-0">
              <TextField
                type="text"
                name="username"
                label="Username"
                variant="outlined"
                size="small"
                fullWidth
                required
                autoFocus
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                type="number"
                name="phone"
                label="Phone"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />

              <FormControl sx={{ m: 0, minWidth: 150, width: '100%' }}>
                <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="role"
                  label="Role"
                  value={formData.is_photographer ? 'Photographer' : formData.is_user ? 'User' : ''}
                  onChange={handleChange}
                  sx={{ height: '40px' }}
                  required
                >
                  <MenuItem value="">
                    <em>select your role</em>
                  </MenuItem>
                  <MenuItem value="Photographer">Photographer</MenuItem>
                  <MenuItem value="User">I am a User</MenuItem>
                </Select>
              </FormControl>

              <TextField
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                size="small"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />


              {/* Display Errors */}
              <Stack sx={{ width: '100%' }} spacing={2}>
                {errors && (
                  <Alert severity="error" >
                    {errors}
                  </Alert>
                )}
              </Stack>

              {/* Display Success Message */}
              <Stack sx={{ width: '100%' }} spacing={2}>
                {successMessage && (
                  <Alert severity="success" >
                    {successMessage}
                  </Alert>
                )}
              </Stack>


              {/* Submit Button */}
              <button
                type="submit"
                className="col-span-full mt-4 p-2 bg-[#1F485B] text-white rounded-md hover:bg-[#16413F] transition duration-300 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
