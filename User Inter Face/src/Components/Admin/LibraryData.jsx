import React from 'react';
import { Link } from "react-router-dom";

function LibraryData() {
    return (
        <div className="course-list-container">
            <div className="header">
                <h2>Our Library</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search"
                        placeholder="Search by Book Name, Author, Code, or Category..."
                    />
                </div>
                <div className="header-actions">
                    <Link to="/addbook" className="add">Add Book</Link>
                </div>
            </div>
            <div className="subheader">
                <p>Available Books</p>
            </div>
            <div className="course-grid">
                <div className="course-card">
                    <div className="course-details heightCoursey">
                        <h3>📖 Book Name: Introduction to React</h3>
                        <p>This is a comprehensive guide to learning React.</p>
                        <div className="course-info">
                            <div className="info-item">
                                <span role="img" aria-label="author">✍️</span>
                                Author: John Doe
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="code">🔢</span>
                                Book Code: RCT101
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="category">📚</span>
                                Category: Technology
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-details heightCoursey">
                        <h3>📖 Book Name: Introduction to React</h3>
                        <p>This is a comprehensive guide to learning React.</p>
                        <div className="course-info">
                            <div className="info-item">
                                <span role="img" aria-label="author">✍️</span>
                                Author: John Doe
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="code">🔢</span>
                                Book Code: RCT101
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="category">📚</span>
                                Category: Technology
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-details heightCoursey">
                        <h3>📖 Book Name: Introduction to React</h3>
                        <p>This is a comprehensive guide to learning React.</p>
                        <div className="course-info">
                            <div className="info-item">
                                <span role="img" aria-label="author">✍️</span>
                                Author: John Doe
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="code">🔢</span>
                                Book Code: RCT101
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="category">📚</span>
                                Category: Technology
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-details heightCoursey">
                        <h3>📖 Book Name: Introduction to React</h3>
                        <p>This is a comprehensive guide to learning React.</p>
                        <div className="course-info">
                            <div className="info-item">
                                <span role="img" aria-label="author">✍️</span>
                                Author: John Doe
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="code">🔢</span>
                                Book Code: RCT101
                            </div>
                            <div className="course-item">
                                <span role="img" aria-label="category">📚</span>
                                Category: Technology
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LibraryData;
