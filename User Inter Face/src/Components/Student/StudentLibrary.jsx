import React, { useState } from 'react';


function StudentLibrary() {
    const hardcodedBooks = [
        {
            bookName: "Introduction to Algorithms",
            bookDescription: "A comprehensive book on algorithms and data structures.",
            authName: "Thomas H. Cormen",
            bookCode: "ALG001",
            bookCatag: "Computer Science"
        },
        {
            bookName: "Clean Code",
            bookDescription: "A handbook of agile software craftsmanship.",
            authName: "Robert C. Martin",
            bookCode: "CODE002",
            bookCatag: "Software Engineering"
        },
        {
            bookName: "The Great Gatsby",
            bookDescription: "A novel by F. Scott Fitzgerald.",
            authName: "F. Scott Fitzgerald",
            bookCode: "LIT003",
            bookCatag: "Literature"
        },
        {
            bookName: "Modern Operating Systems",
            bookDescription: "A modern and detailed book on OS concepts.",
            authName: "Andrew S. Tanenbaum",
            bookCode: "OS004",
            bookCatag: "Computer Science"
        }
    ];

    const [books, setBooks] = useState(hardcodedBooks);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = books.filter(book =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.bookCatag && book.bookCatag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="dashboard">
            <div className="course-list-containerr" style={{ padding: "30px", width: "100%" }}>
                <div className="header">
                    <h2>Student Library</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search by Book Name, Author, Code, or Category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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
                                    <h3>Book Name: {book.bookName}</h3>
                                    <p>{book.bookDescription}</p>
                                    <div className="course-info">
                                        <div className="info-item">
                                            <span role="img" aria-label="author">✍️</span> Author: {book.authName}
                                        </div>
                                        <div className="info-item">
                                            <span role="img" aria-label="code">🔢</span> Book Code: {book.bookCode}
                                        </div>
                                        <div className="info-item">
                                            <span role="img" aria-label="category">📚</span> Category: {book.bookCatag}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-books">No books found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentLibrary;
