import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Library() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/admin/library")
            .then((response) => response.json())
            .then(data => {
                if (data.success) {
                    setBooks(data.data);
                } else {
                    console.error("Invalid Data format from API");
                }
            })
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    // Filter books based on search term
    const filteredBooks = books.filter(book =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookCode.toString().includes(searchTerm) ||
        (book.bookCatag && book.bookCatag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="dashboard">
            <div className="course-list-container" style={{ padding: "30px" }}>
                <div className="header">
                    <h2>Our Library</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search"
                            placeholder="Search by Book Name, Author, Code, or Category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <div key={index} className="course-card">
                                <div className="course-details">
                                    <h3 className=''> Book Name: {book.bookName}</h3>
                                    <p>{book.bookDescription}</p>
                                    <div className="course-info">
                                        <div className="info-item">
                                            <span role="img" aria-label="author">✍️</span>
                                            Author: {book.authName}
                                        </div>
                                        <div className="course-item">
                                            <span role="img" aria-label="code">🔢</span>
                                            Book Code: {book.bookCode}
                                        </div>
                                        <div className="course-item">
                                            <span role="img" aria-label="category">📚</span>
                                            Category: {book.bookCatag || "N/A"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No books found matching the search criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Library;
