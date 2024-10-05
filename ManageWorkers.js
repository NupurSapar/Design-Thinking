import React from 'react';
import './ManageWorkers.css'; // Import the ManageWorkers-specific CSS

const ManageWorkers = () => {
    // Example worker data, you can replace this with real data
    const workers = [
        { id: 1, name: 'Rajesh Kumar', skill: 'Plumber', rating: 4.5 },
        { id: 2, name: 'Anita Verma', skill: 'Carpenter', rating: 4.2 },
        { id: 3, name: 'Sunil Gupta', skill: 'Electrician', rating: 4.7 }
    ];

    const handleHire = (workerId) => {
        // Handle hiring logic here
        console.log('Hired worker with ID:', workerId);
    };

    return (
        <section id="manage-workers">
            <h2>Manage Workers</h2>
            <ul className="worker-list">
                {workers.map((worker) => (
                    <li key={worker.id} className="worker-item">
                        <div>
                            <h3>{worker.name}</h3>
                            <p>Skill: {worker.skill}</p>
                            <p>Rating: {worker.rating} ⭐</p>
                        </div>
                        <button onClick={() => handleHire(worker.id)}>Hire</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ManageWorkers;
