import React, { useState } from 'react';

function SettingUpdate() {
    const [formData, setFormData] = useState({
        companyName: 'Vishal Kumar',
        contactPerson: 'Louis Pierce',
        mobileNumber: '+1 882-635-7531',
        address: '44 Shirley Ave. West Chicago, IL 60185',
        email: 'LouisPierce@example.com',
        websiteUrl: 'http://',
        country: '',
        state: 'California',
        city: 'New York',
        postalCode: '91403',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="company-settings-container">
            <h2>Company Settings</h2>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name *</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number *</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <div className="input-with-icon">
                            <span className="icon icon-setting">✉️</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="websiteUrl">Website Url</label>
                        <div className="input-with-icon">
                            <span className="icon icon-setting">🌐</span>
                            <input
                                type="url"
                                id="websiteUrl"
                                name="websiteUrl"
                                value={formData.websiteUrl}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State/Province</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className='add'>Save</button>
            </form>
        </div>
    );
}

export default SettingUpdate;