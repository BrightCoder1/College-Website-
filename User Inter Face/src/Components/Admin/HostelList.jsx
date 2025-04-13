import React, { useState, useEffect } from 'react';

const HotelList = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState({
        block: '',
        roomNo: '',
        type: '',
        noOfBed: '',
        availability: '',
        studentName: '',
    });

    useEffect(() => {
        generateRandomHostelData();
    }, []);

    const generateRandomHostelData = () => {
        const sampleData = [
            {
                block: 'A',
                roomNo: '101',
                roomType: 'Single',
                noOfBeds: 1,
                availability: 'Available',
                firstName: 'Rahul',
                lastName: 'Verma',
            },
            {
                block: 'B',
                roomNo: '203',
                roomType: 'Double',
                noOfBeds: 2,
                availability: 'Occupied',
                firstName: 'Anjali',
                lastName: 'Sharma',
            },
            {
                block: 'C',
                roomNo: '305',
                roomType: 'Triple',
                noOfBeds: 3,
                availability: 'Available',
                firstName: 'Amit',
                lastName: 'Patel',
            },
            {
                block: 'D',
                roomNo: '407',
                roomType: 'Double',
                noOfBeds: 2,
                availability: 'Occupied',
                firstName: 'Sneha',
                lastName: 'Rao',
            },
            {
                block: 'A',
                roomNo: '108',
                roomType: 'Single',
                noOfBeds: 1,
                availability: 'Available',
                firstName: 'Karan',
                lastName: 'Joshi',
            },
        ];

        // Shuffle array randomly and pick 3 random records
        const shuffled = sampleData.sort(() => 0.5 - Math.random());
        const randomSubset = shuffled.slice(0, 3);

        setFilteredData(randomSubset);
    };

    const handleChange = (e) => {
        setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = filteredData.filter((item) => {
            return (
                item.block.toLowerCase().includes(searchTerm.block.toLowerCase()) &&
                item.roomNo.toLowerCase().includes(searchTerm.roomNo.toLowerCase()) &&
                item.roomType.toLowerCase().includes(searchTerm.type.toLowerCase()) &&
                String(item.noOfBeds).includes(searchTerm.noOfBed) &&
                item.availability.toLowerCase().includes(searchTerm.availability.toLowerCase()) &&
                `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchTerm.studentName.toLowerCase())
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div className="room-table-container">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" name="block" placeholder="Block" value={searchTerm.block} onChange={handleChange} />
                <input type="text" name="roomNo" placeholder="Room No" value={searchTerm.roomNo} onChange={handleChange} />
                <input type="text" name="type" placeholder="Type" value={searchTerm.type} onChange={handleChange} />
                <input type="text" name="noOfBed" placeholder="No of Bed" value={searchTerm.noOfBed} onChange={handleChange} />
                <input type="text" name="availability" placeholder="Availability" value={searchTerm.availability} onChange={handleChange} />
                <input type="text" name="studentName" placeholder="Student Name" value={searchTerm.studentName} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>BLOCK</th>
                        <th>ROOM NO</th>
                        <th>TYPE</th>
                        <th>NO OF BED</th>
                        <th>STUDENT NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData
                        .filter(room => room.roomNo !== null)
                        .map((room, index) => (
                            <tr key={index}>
                                <td>{room.block}</td>
                                <td>{room.roomNo}</td>
                                <td>{room.roomType}</td>
                                <td>{room.noOfBeds}</td>
                                <td>{room.firstName + " " + room.lastName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HotelList;
