import React from 'react';
import PostJob from './PostJob'; // Component for posting a job
import ManageWorkers from './ManageWorkers'; // Component for managing workers
import './EmployerProfile.css'; // Link to your CSS file

const EmployerProfile = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="LandingPage.html">Home</a></li>
                        <li><a href="#post-job">Post a Job</a></li>
                        <li><a href="#manage-workers">Manage Workers</a></li>
                        <li><a href="#profile" id="profile-button">My Profile</a></li>
                    </ul>
                </nav>
                <div className="title-container">
                    <h1>Employer Profile</h1>
                    <p>Post jobs and manage workers.</p>
                </div>
            </header>

            <main>
                <section id="post-job">
                    <PostJob /> {/* Render PostJob component */}
                </section>
                <section id="manage-workers">
                    <ManageWorkers /> {/* Render ManageWorkers component */}
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Thekedar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default EmployerProfile;
