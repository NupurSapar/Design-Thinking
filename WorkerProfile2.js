// src/components/WorkerProfile.js

import React from 'react';
import JobListing from './JobListing'; // Import the JobListings component
import UpdateProfile from './UpdateProfile'; // Import the UpdateProfile component
import './WorkerProfile2.css'; // Link to your CSS file

const WorkerProfile2 = () => {
    

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="LandingPage.html">Home</a></li>
                        <li><a href="#job-listing">Job Listings</a></li>
                        <li><a href="#employer-requests">Employer Requests</a></li>
                        <li><a href="#profile" id="profile-button">My Profile</a></li>
                        
                    </ul>
                </nav>
                <div className="title-container">
                    <h1>Worker Profile</h1>
                    <p>Manage your job listings and profile details.</p>
                </div>
            </header>

            <main>
                
                <JobListing /> {/* Render JobListings component */}
            </main>

            <footer>
                <p>&copy; 2024 Thekedar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default WorkerProfile2;
