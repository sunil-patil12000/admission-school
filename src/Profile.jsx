import React from 'react';
import './Profile.css'; // import your styling file

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-img"></div> {/* Add your profile image here */}
      <div className="profile-details">
        <h1 className="profile-name">John Doe</h1>
        <h2 className="profile-father">Father's Name: John Smith</h2>
        <h2 className="profile-mother">Mother's Name: Jane Doe</h2>
        <p className="profile-address">Address: 123 Main St, Anytown USA</p>
        <p className="profile-phone">Phone: (123) 456-7890</p>
        <p className="profile-email">Email: john.doe@email.com</p>
      </div>
    </div>
  );
}

export default Profile;
