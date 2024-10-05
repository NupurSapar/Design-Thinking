// src/components/JobListings.js

import React from 'react';
import './JobListing.css'; // Link to your CSS file

const JobListings = () => {
    const jobListings = [
        { title: 'Job Title 1', description: 'Job description goes here...' },
        { title: 'Job Title 2', description: 'Job description goes here...' },
        // Add more job listings as needed
    ];

    const handleAcceptJob = (title) => {
        alert(`You have accepted ${title}`);
    };

    const handleViewDetails = (title) => {
        alert(`Viewing details for ${title}`);
    };

    return (
        <div>
            <h2>Job Listings</h2>
            {jobListings.map((job, index) => (
                <div className="job-listing" key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <button className="accept-btn" onClick={() => handleAcceptJob(job.title)}>Accept Job</button>
                    <button className="view-details-btn" onClick={() => handleViewDetails(job.title)}>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default JobListings;
