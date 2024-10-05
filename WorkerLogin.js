// src/components/WorkerLogin.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file

const WorkerLogin = () => {
  return (
    <div>
      <header>
        <h1>Worker Login</h1>
      </header>

      <main>
        <form className="login-form">
          {/* Input fields for login can be added here */}
          <label htmlFor="worker-username">Username:</label>
          <input type="text" id="worker-username" name="worker-username" required />

          <label htmlFor="worker-password">Password:</label>
          <input type="password" id="worker-password" name="worker-password" required />
          
          {/* Link inside the button */}
          <Link to="/worker-profile">
            <button type="button">
              Login
            </button>
          </Link>
          
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Thekedar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WorkerLogin;
