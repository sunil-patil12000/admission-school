import React from 'react';
import './LibraryPage.css';


const staffData = [
    {
        id: 1,
        name: 'John Doe',
        education: 'Master of Library Science',
        image: '/img/cat-2.jpg',
    },


];


const departmentData = [
    {
        id: 1,
        name: 'Fiction',
        totalBooks: 500,
    },
    {
        id: 2,
        name: 'Science',
        totalBooks: 350,
    },

];

const LibraryPage = () => {
    return (
        <div className="library-page">
            <h1>Library Staff</h1>
            <div className="staff-list">
                {staffData.map((staff) => (
                    <div className="staff-card" key={staff.id}>
                        <img src={staff.image} alt={staff.name} />
                        <h2>{staff.name}</h2>
                        <p>{staff.education}</p>
                    </div>
                ))}
            </div>
            <h1>Book Departments</h1>
            <div className="department-list">
                {departmentData.map((department) => (
                    <div className="department-card" key={department.id}>
                        <h2>{department.name}</h2>
                        <p>Total Books: {department.totalBooks}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;
