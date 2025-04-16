import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/admin/hostel", {
                    withCredentials: true
                });
                setFilteredData(response.data.data);
            } catch (error) {
                toast.error("Something went wrong while fetching data!");
            }
        };

        fetchData();
    }, []);


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
                        <th>COURSE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData
                        .filter(room => room.roomNo !== null) // Optional: Filter out null room numbers
                        .map((room, index) => (
                            <tr key={index}>
                                <td>{room.block}</td>
                                <td>{room.roomNo}</td>
                                <td>{room.roomType}</td>
                                <td>{room.noOfBeds}</td>
                                <td>{room.firstName + " " + room.lastName}</td>
                                <td>{room.class}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HotelList;
