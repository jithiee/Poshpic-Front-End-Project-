import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NavFooterLayout from './layouts/layoutmainpage/NavFooterLayout';
import Registrationpage from './pages/Registrationpage';
import Loginpage from './pages/Loginpage';
import OtpVerifypage from './pages/OtpVerifypage';


const router = createBrowserRouter(
  createRoutesFromElements(

<Route>
    <Route path='/' element={<NavFooterLayout/>} >
          {/* <Route   path='home/'  />
          <Route  path='about/'   />
          <Route   path='contact' /> */}
    </Route>
        

    <Route path='/register' element={ <Registrationpage/>} />
    <Route path='/login' element={ <Loginpage/>} />
    <Route path='/otpverify/:email' element={ <OtpVerifypage/>} />


</Route>
     



  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
