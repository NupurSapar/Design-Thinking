import React, { useState } from 'react';
import './PostJob.css'; // Import the PostJob-specific CSS

const PostJob = () => {
    const [jobDetails, setJobDetails] = useState({
        title: '',
        description: '',
        wage: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can integrate backend API to submit job details
        console.log('Job Posted:', jobDetails);
    };

    return (
        <section id="post-job">
            <h2>Post a Job</h2>
            <form onSubmit={handleSubmit} className="post-job-form">
                <label htmlFor="title">Job Title:</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={jobDetails.title} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="description">Job Description:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={jobDetails.description} 
                    onChange={handleChange} 
                    required
                ></textarea>

                <label htmlFor="wage">Wage (per day):</label>
                <input 
                    type="text" 
                    id="wage" 
                    name="wage" 
                    value={jobDetails.wage} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="location">Location:</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    value={jobDetails.location} 
                    onChange={handleChange} 
                    required 
                />

                <button type="submit">Post Job</button>
            </form>
        </section>
    );
};

export default PostJob;
