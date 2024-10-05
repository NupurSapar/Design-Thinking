// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage'; // Import LandingPage
import EmployerLogin from './components/EmployerLogin'; // Import EmployerLogin
import WorkerLogin from './components/WorkerLogin'; // Import WorkerLogin
import WorkerProfile2 from './components/WorkerProfile2'; // Import WorkerProfile
import EmployerProfile from './components/EmployerProfile';
//import UpdateProfile from './components/UpdateProfile'; // Import UpdateProfile component
//import JobListing from './components/JobListing'; // Import JobListings component
// If you have a Logout component, you can uncomment the following line
// import Logout from './components/Logout'; // Import Logout component (if needed)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
        <Route path="/employer-login" element={<EmployerLogin />} /> {/* Employer login route */}
        <Route path="/worker-login" element={<WorkerLogin />} /> {/* Worker login route */}
        <Route path="/worker-profile" element={<WorkerProfile2 />} /> {/* Worker profile route */}
        <Route path="/employer-profile" element={<EmployerProfile />} />
       
        {/* Uncomment the line below if you have a Logout component */}
        {/* <Route path="/logout" element={<Logout />} /> {/* Logout route (if needed) */} 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
