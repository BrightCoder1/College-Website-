import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TransportTable = () => {
    const [searchTerm, setSearchTerm] = useState({
        drivername: '',
        mobilenumber: '',
        licence: '',
        vechileNumber: '',
    });

    const [TransportTableData, setTransportTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // Generate random TransportTable data
    useEffect(() => {
        const sampleData = [
            {
                drivername: 'Ravi Kumar',
                mobile: '9876543210',
                licenseno: 'DL12345678',
                vehicleno: 'UP16AX1234',
                routename: 'Route A',
                stdCap: 40
            },
            {
                drivername: 'Sunil Singh',
                mobile: '9123456780',
                licenseno: 'MH87654321',
                vehicleno: 'MH12CD5678',
                routename: 'Route B',
                stdCap: 35
            },
            {
                drivername: 'Amit Sharma',
                mobile: '9988776655',
                licenseno: 'RJ56473829',
                vehicleno: 'RJ14YZ8765',
                routename: 'Route C',
                stdCap: 50
            },
            {
                drivername: 'Suresh Gupta',
                mobile: '9345678901',
                licenseno: 'PB98234561',
                vehicleno: 'PB10LM2345',
                routename: 'Route D',
                stdCap: 45
            },
            {
                drivername: 'Deepak Mehta',
                mobile: '9001234567',
                licenseno: 'TN23456789',
                vehicleno: 'TN01AB1234',
                routename: 'Route E',
                stdCap: 30
            },
        ];

        // Optional: shuffle or slice for randomization
        const shuffled = sampleData.sort(() => 0.5 - Math.random()).slice(0, 4);

        setTransportTableData(shuffled);
        setFilteredData(shuffled);
    }, []);

    const handleChange = (e) => {
        setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = TransportTableData.filter((item) => {
            return (
                item.drivername.toLowerCase().includes(searchTerm.drivername.toLowerCase()) &&
                item.mobile.includes(searchTerm.mobilenumber) &&
                item.licenseno.toLowerCase().includes(searchTerm.licence.toLowerCase()) &&
                item.vehicleno.toLowerCase().includes(searchTerm.vechileNumber.toLowerCase())
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div className="dashboard">
            <div className="driver-table-container">
                <div className="postion flex">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="drivername"
                            placeholder="Driver Name"
                            value={searchTerm.drivername}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="mobilenumber"
                            placeholder="Mobile Number"
                            value={searchTerm.mobilenumber}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="licence"
                            placeholder="License Number"
                            value={searchTerm.licence}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="vechileNumber"
                            placeholder="Vehicle Number"
                            value={searchTerm.vechileNumber}
                            onChange={handleChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <Link to="/addTransportTable" className="add">Add TransportTable</Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Driver Name</th>
                            <th>Mobile</th>
                            <th>License No</th>
                            <th>Vehicle No</th>
                            <th>Route Name</th>
                            <th>Student Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((driver, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{driver.drivername}</td>
                                    <td>{driver.mobile}</td>
                                    <td>{driver.licenseno}</td>
                                    <td>{driver.vehicleno}</td>
                                    <td>{driver.routename}</td>
                                    <td>{driver.stdCap}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>No TransportTable data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransportTable;
