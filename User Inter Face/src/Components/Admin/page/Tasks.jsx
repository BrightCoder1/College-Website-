import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./tasks.css";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/tasks", {
                    withCredentials: true,
                });
                setTasks(response.data);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
                toast.error("Failed to load tasks.");
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="task-container">
            <ToastContainer />
            <h2>Task Details</h2>
            {tasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <div className="task-item">
                        <strong>Creator Name:</strong> {task.name}
                    </div>
                    <div className="task-item">
                        <strong>Create Date:</strong> {new Date(task.createtime).toLocaleString()}
                    </div>
                    <div className="task-item">
                        <strong>Duration:</strong> {task.duration}
                    </div>
                    <div className="task-item">
                        <strong>Description:</strong> {task.description}
                    </div>
                    <div className="btncontainer">
                        <button className='add btn position'>Delete</button>
                        <button className='add btn position color'>Edit</button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Tasks;
