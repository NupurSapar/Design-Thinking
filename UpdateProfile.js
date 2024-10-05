// src/components/UpdateProfile.js

import React from 'react';
import './UpdateProfile.css'; // Link to your CSS file

const UpdateProfile = () => {
    const handleUpdate = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
        // You can add further logic to handle profile update
    };

    return (
        <div>
            <header>
                <h1>Update Profile</h1>
            </header>
            <main>
                <form className="update-profile-form" onSubmit={handleUpdate}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <button type="submit">Update Profile</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2024 Thekedar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default UpdateProfile;
