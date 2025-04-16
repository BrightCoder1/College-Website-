import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const ContactList = () => {



    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/contact", {
                    withCredentials: true
                });
                setMessages(response.data.data)
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                toast.error("Something Want Wrong!..")
            }
        }

        fetchData();
    }, []);


    return (
        <>
            <ToastContainer className="z-index" />
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
