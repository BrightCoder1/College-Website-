import React, { useState } from 'react';

const ContactList = () => {
    const initialData = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            date: '12/04/25',
            message: 'Hello!',
        },
        {
            name: 'Vishal Kumar',
            email: 'vishal.kumar@example.com',
            date: '12/04/25',
            message: 'How are you doing?',
        },
        {
            name: 'Anjali Sharma',
            email: 'anjali.sharma@example.com',
            date: '11/04/25',
            message: 'Please reply to my email.',
        },
        {
            name: 'Rahul Mehta',
            email: 'rahul.mehta@example.com',
            date: '10/04/25',
            message: 'Meeting scheduled tomorrow.',
        },
        {
            name: 'Sneha Verma',
            email: 'sneha.verma@example.com',
            date: '09/04/25',
            message: 'Let me know your feedback.',
        },
        {
            name: 'Amit Joshi',
            email: 'amit.joshi@example.com',
            date: '08/04/25',
            message: 'Thanks for the help!',
        },
        {
            name: 'Pooja Singh',
            email: 'pooja.singh@example.com',
            date: '07/04/25',
            message: 'Looking forward to the event.',
        },
        {
            name: 'Rohit Yadav',
            email: 'rohit.yadav@example.com',
            date: '06/04/25',
            message: 'Can we reschedule?',
        }
    ];


    const [messages, setMessages] = useState(initialData);


    return (
        <>
            <div className="MessageSet">
                {messages.map((msg, index) => (
                    <div className="message" key={index}>
                        <div className="messagebox">
                            <h3 className="messageName">Name: {msg.name}</h3>
                            <h4 className="messageh4">Email: {msg.email}</h4>
                            <h5 className="messageh4">Date: {new Date(msg.date).toLocaleString()}</h5>
                            <p className="messageP">{msg.message}</p>
                            <button className="delete" >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ContactList;
