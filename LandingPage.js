// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandingPage.css'; // Make sure to import your CSS file

const LandingPage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About Us</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="title-container">
          <h1>Thekedar</h1>
          <p>Your trusted platform for connecting daily wage workers with employers.</p>
        </div>
      </header>

      <main>
        <section className="split-screen">
          <Link to="/worker-login" className="left"> {/* Use Link with button styles */}
            <h2>Worker Login</h2>
          </Link>
          <Link to="/employer-login" className="right"> {/* Use Link with button styles */}
            <h2>Employer Login</h2>
          </Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Thekedar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
