import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../fileadmin.css"
const AddTransport = () => {
    const [formData, setFormData] = useState({
        drivername: '',
        mobile: '',
        licenseno: '',
        vehicleno: '',
        routename: '',
        stdCap: '',
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
            const response = await axios.post("http://localhost:3000/admin/addtransport", formData, {
                headers: { "Content-Type": "application/json" }
            });

            if (response.data.success) {
                toast.success("Transport added successfully!", {
                    position: "top-center",
                    autoClose: 3000
                });
                handleReset();
            }
        } catch (error) {
            toast.error("Failed to add transport.", {
                position: "top-center",
                autoClose: 3000
            });
        }
    };

    const handleReset = () => {
        setFormData({
            drivername: '',
            mobile: '',
            licenseno: '',
            vehicleno: '',
            routename: '',
            stdCap: '',
        });
    };

    return (
        <div className="dashboard dashboard1">
            <div className="transport-add-page">
                <h2 className='center'>Add Transport</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3 >Transport Information</h3>

                        <div className="form-row">
                            <label>Driver Name:</label>
                            <input type="text" name="drivername" value={formData.drivername} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Mobile:</label>
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>License No:</label>
                            <input type="text" name="licenseno" value={formData.licenseno} onChange={handleChange} />

                            <label>Vehicle No:</label>
                            <input type="text" name="vehicleno" value={formData.vehicleno} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <label>Route Name:</label>
                            <input type="text" name="routename" value={formData.routename} onChange={handleChange} />

                            <label>Student Cap:</label>
                            <input type="text" name="stdCap" value={formData.stdCap} onChange={handleChange} />
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

export default AddTransport;
