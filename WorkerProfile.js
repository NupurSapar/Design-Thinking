// src/components/WorkerProfile.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './WorkerProfile.css'; // Make sure to import your CSS file
import { useNavigate } from 'react-router-dom';

const WorkerProfile = () => {
  

  // Sample state to hold job listings and requests
  const [jobListings, setJobListings] = useState([]);
  const [employerRequests, setEmployerRequests] = useState([]);

  // Mock function to fetch job listings and employer requests
  useEffect(() => {
    // Replace these with actual API calls
    setJobListings([
      { id: 1, title: 'Construction Worker', description: 'Help with building a new house.', employer: 'ABC Constructions' },
      { id: 2, title: 'Gardener', description: 'Maintain the garden and landscaping.', employer: 'Green Thumb Landscaping' },
    ]);

    setEmployerRequests([
      { id: 1, title: 'Request for Cleaning Service', employer: 'CleanCo', message: 'We would like to hire you for cleaning services.' },
      { id: 2, title: 'Request for Plumbing Work', employer: 'QuickFix', message: 'We need your plumbing skills for a project.' },
    ]);
  }, []);

  const handleAcceptRequest = (requestId) => {
    if (window.confirm('Are you sure you want to accept this request?')) {
      // Handle request acceptance logic here (e.g., API call)
      console.log(`Request ${requestId} accepted!`);
      // You can also remove the request from the state if needed
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/worker-profile">My Profile</Link></li>
            <li><Link to="/job-listings">Job Listings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <div className="title-container">
          <h1>Welcome to Your Profile</h1>
        </div>
      </header>

      <main>
        <section className="profile-section">
          <Link to="/update-profile" className="update-profile-button">Update Profile</Link>

          <h2>Job Listings</h2>
          <ul className="job-listings">
            {jobListings.map(job => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p><strong>Employer:</strong> {job.employer}</p>
                <Link to={`/job-details/${job.id}`} className="view-details">View Details</Link>
              </li>
            ))}
          </ul>

          <h2>Employer Requests</h2>
          <ul className="employer-requests">
            {employerRequests.map(request => (
              <li key={request.id}>
                <h3>{request.title}</h3>
                <p>{request.message}</p>
                <p><strong>From:</strong> {request.employer}</p>
                <button className="accept-request" onClick={() => handleAcceptRequest(request.id)}>
                  Accept Request
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Thekedar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WorkerProfile;
