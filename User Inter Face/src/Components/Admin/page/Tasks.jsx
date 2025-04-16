// Tasks.js

import React from 'react';
import "./tasks.css";

const Tasks = ({ creatorName, createDate, duration, description }) => {
    return (
        <div className="task-container">
            <h2>Task Details</h2>
            <div className="task-card">
                <div className="task-item">
                    <strong>Creator Name:</strong> {creatorName}
                </div>
                <div className="task-item">
                    <strong>Create Date:</strong> {createDate}
                </div>
                <div className="task-item">
                    <strong>Duration:</strong> {duration}
                </div>
                <div className="task-item">
                    <strong>Description:</strong> {description}
                </div>
                <button className='add btn postion'>Delete</button>
            </div>
        </div>
    );
};

export default Tasks;
