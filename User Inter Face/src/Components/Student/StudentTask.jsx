import React, { useState } from 'react';

const tasks = [
    {
        title: "Financial Aid Session with Counselor",
        topic: "Financial",
        assignee: "9 Students",
        startDate: "",
        dueDate: "09/16/2024",
        status: "Active"
    },
    {
        title: "Follow 3 Colleges",
        topic: "College",
        assignee: "29 Students",
        startDate: "",
        dueDate: "05/16/2024",
        status: "Active"
    },
    {
        title: "Senior Survey",
        topic: "Self Discovery",
        assignee: "4 Students",
        startDate: "",
        dueDate: "04/30/2024",
        status: "Active"
    },
    {
        title: "College Visit Prep",
        topic: "College",
        assignee: "5 Students",
        startDate: "",
        dueDate: "04/24/2024",
        status: "Complete"
    },
    {
        title: "Career Interest Assessment",
        topic: "Career",
        assignee: "40 Students",
        startDate: "04/15/2024",
        dueDate: "04/19/2024",
        status: "Pending"
    },
    {
        title: "Share Application Outcomes",
        topic: "College",
        assignee: "Unassigned",
        startDate: "04/09/2024",
        dueDate: "05/15/2024",
        status: "Pending"
    },
];

function StudentTask() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="task-container">
            <div className="task-header">
                <input
                    type="text"
                    placeholder="Search..."
                    className="task-search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <table className="task-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Assignee</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task, index) => (
                        <tr key={index}>
                            <td className="task-title">{task.title}</td>
                            <td>{task.topic}</td>
                            <td>{task.assignee}</td>
                            <td>{task.startDate || '-'}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTask;
