import React, { useState } from 'react';
import { Link } from "react-router-dom";

function StudentNotice() {
    // Hardcoded notice data
    const hardcodedNotices = [
        {
            notice: "Campus will remain closed on 1st May due to Labour Day.",
            createDate: "2025-04-28",
            durationDate: "2025-05-01",
            create: "Admin"
        },
        {
            notice: "Midterm exams will start from 5th May. Prepare accordingly.",
            createDate: "2025-04-27",
            durationDate: "2025-05-15",
            create: "Examination Cell"
        },
        {
            notice: "Library will be closed for maintenance on 2nd May.",
            createDate: "2025-04-26",
            durationDate: "2025-05-02",
            create: "Library Department"
        },
    ];

    const [notices, setNotices] = useState(hardcodedNotices);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter notices based on search
    const filteredNotices = notices.filter(notice =>
        notice.notice.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.create.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.createDate.includes(searchTerm) ||
        (notice.durationDate && notice.durationDate.includes(searchTerm))
    );

    return (
        <div className="dashboard">
            <div className="course-list-container max-width" style={{ padding: "30px" }}>
                <div className="header">
                    <h2>Notice Board</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search"
                            placeholder="Search notice..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="subheader">
                    <p>Available Notices</p>
                </div>

                <div className="course-grid">
                    {filteredNotices.length > 0 ? (
                        filteredNotices.map((item, index) => (
                            <div key={index} className="course-card">
                                <div className="course-details">
                                    <h3>Date: {item.createDate}</h3>
                                    <div className="course-info">
                                        <div className="info-item">
                                            <span role="img" aria-label="creator">✍️</span> Generate By: {item.create}
                                        </div>
                                        <div className="course-item">
                                            <span role="img" aria-label="notice">📚</span> Notice: {item.notice}
                                        </div>
                                        <div className="course-item">
                                            <span role="img" aria-label="duration">📅</span> Valid Until: {item.durationDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No notices found matching the search criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentNotice;
