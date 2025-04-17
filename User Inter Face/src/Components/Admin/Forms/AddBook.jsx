import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AddBook = () => {
    const [formData, setFormData] = useState({
        authName: '',
        bookName: '',
        bookCode: '',
        bookDescription: '',
        bookCatag: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value || ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/addbook", formData, {
                headers: { "Content-Type": "application/json" }
            });

            if (response.data.success) {
                toast.success("Book added successfully!", {
                    position: "top-center",
                    autoClose: 3000
                });
                handleReset();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to add book. Check console for details.", {
                position: "top-center",
                autoClose: 3000
            });
        }
    };

    const handleReset = () => {
        setFormData({
            authName: '',
            bookName: '',
            bookCode: '',
            bookDescription: '',
            bookCatag: '',
        });
    };

    return (
        <div className="dashboard dashboard1">
            <ToastContainer className="z-index" />
            <div className="book-add-page student-add-page height">
                <h2>Add Book to Library</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3>Book Information</h3>
                        <div className="form-row">
                            <label>Author Name:</label>
                            <input type="text" name="authName" value={formData.authName || ''} onChange={handleChange} />

                            <label>Book Name:</label>
                            <input type="text" name="bookName" value={formData.bookName || ''} onChange={handleChange} />
                            <label>Book Code:</label>
                            <input type="text" name="bookCode" value={formData.bookCode || ''} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Description:</label>
                            <input type="text" name="bookDescription" value={formData.bookDescription || ''} onChange={handleChange} />

                            <label>Category:</label>
                            <input type="text" name="bookCatag" value={formData.bookCatag || ''} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                        <button type="reset" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
