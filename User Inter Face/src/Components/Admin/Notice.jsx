import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Notice = () => {
    const [contactMessages, setContactMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/admin/notification",
                    {
                        withCredentials: true
                    }
                )
                // console.log(response.data.notice);

                setContactMessages(response.data.notice);
            } catch (error) {
                toast.error("Something Want Wrong!")
            }
        }

        fetchData();
    }, [])

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
                            <p className="messagep">{msg.notice}</p>
                        </div>
                        <h5 className="messageh4">Date: {new Date(msg.date).toLocaleString()}</h5>
                        <div className="btncontainer">
                            <button className='add btn position delete' onClick={() => handleDelete(index)}>Delete</button>
                            <button className='add btn position color delete'>Edit</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Notice;
