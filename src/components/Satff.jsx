import React from 'react';
import StaffCard from './StaffCard';
import './staff.css'

const staffData = [
    {
        id: 1,
        name: 'John Doe',
        education: 'Ph.D. in Computer Science',
        designation: 'Professor',
        email: 'johndoe@example.com',
        phone: '+1 123-456-7890',
        areaOfInterest: 'Artificial Intelligence',
        department: 'Computer Science',
        image: '/img/cat-1.jpg',
    },

    {
        id: 2,
        name: 'John Doe',
        education: 'Ph.D. in Computer Science',
        designation: 'Professor',
        email: 'johndoe@example.com',
        phone: '+1 123-456-7890',
        areaOfInterest: 'Artificial Intelligence',
        department: 'Computer Science',
        image: '/img/cat-1.jpg',
    },

    {
        id: 3,
        name: 'John Doe',
        education: 'Ph.D. in Computer Science',
        designation: 'Professor',
        email: 'johndoe@example.com',
        phone: '+1 123-456-7890',
        areaOfInterest: 'Artificial Intelligence',
        department: 'Computer Science',
        image: '/img/cat-1.jpg',
    },

];

const Staff = () => {
    const departments = [...new Set(staffData.map((staff) => staff.department))];

    return (
        <div className="staff-directory">
            <h1 className='head'>College Staff Directory</h1>
            {departments.map((department) => (
                <div key={department}>
                    <h2>{department}</h2>
                    <div className="staff-cards">
                        {staffData
                            .filter((staff) => staff.department === department)
                            .map((staff) => (
                                <StaffCard key={staff.id} staff={staff} />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Staff;
