import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
    const [contactMessages, setContactMessages] = useState([
        {
            name: 'Vishal Kumar',
            message:
                'This is a long notice from Vishal Kumar. It contains important information about the upcoming project deadline. Please make sure to submit your reports by the end of this week. We will also be having a team meeting on Monday at 10 AM to discuss the project progress.',
            date: '2025-03-22',
        },
        {
            name: 'Priya Sharma',
            message:
                'Priya Sharma has announced a workshop on advanced React concepts. The workshop will cover topics like hooks, context API, and performance optimization. It is scheduled for next Friday, and registration is now open. Seats are limited, so please register as soon as possible.',
            date: '2025-03-23',
        },
        {
            name: 'Rahul Singh',
            message:
                'Rahul Singh has posted a notice regarding the server maintenance. The server will be down for maintenance on Sunday from 12 PM to 4 PM. During this time, the application will be inaccessible. Please plan your work accordingly. We apologize for any inconvenience caused.',
            date: '2025-03-24',
        },
        {
            name: 'Team Admin',
            message: 'Urgent announcement: All team members are requested to update their system passwords due to a recent security alert. Please use a strong, unique password and update it before the end of the day. Contact the IT department if you encounter any difficulties.',
            date: '2025-03-25'
        },
        {
            name: 'HR Department',
            message: 'Reminder: The annual company picnic is scheduled for next Saturday at the Lakeside Park. Please RSVP by Wednesday so we can finalize the catering. Activities include a BBQ, games, and music. Bring your families for a fun-filled day!',
            date: '2025-03-26'
        }
    ]);

    const handleDelete = (index) => {
        const updatedNotices = [...contactMessages];
        updatedNotices.splice(index, 1);
        setContactMessages(updatedNotices);
    };

    return (
        <>
            <div className="addnotice">
                <Link to="/add/notice" className="add position">
                    Add Notice
                </Link>
            </div>
            {contactMessages.map((msg, index) => (
                <div className="message" key={index}>
                    <div className="messagebox">
                        <h3 className="messageName">Name: {msg.name}</h3>
                        <div className="noticeFlex">
                            <h4 className="messageh4">Notice: </h4>
                            <p className="messagep">{msg.message}</p>
                        </div>
                        <h5 className="messageh4">Date: {new Date(msg.date).toLocaleString()}</h5>
                        <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Notice;
