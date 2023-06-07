import React, { useEffect } from 'react';
import './Profile.css'; // import your styling file
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

function Profile() {
  const [datap, setDatap] = useState('');
  const id = Cookies.get('user');

  console.log(id)


  useEffect(() => {
    const gh = async () => {
      const data = await axios.post('http://localhost:4545/getdata', {
        id: id
      })


      setDatap(data.data)
    }

    gh()

  }, [])


  console.log(datap.photo && datap.photo.path)
  console.log(datap);





  return (
    <div className="profile-container">
      <div className="profile-img">
        <img className='profile-img' src={'http://localhost:4545/' + (datap.photo && datap.photo.path)} alt="" />
      </div> {/* Add your profile image here */}
      <div className="profile-details">
        <h1 className="profile-name">{datap.firstname + " " + datap.lastname}</h1>
        <h2 className="profile-father">Father's Name: {datap.fathername}</h2>
        <h2 className="profile-mother">Mother's Name: {datap.mothername}</h2>
        <p className="profile-address">Address: {datap.cuttentaddress}</p>
        <p className="profile-phone">Phone: {'+91' + datap.phone}</p>
        <p className="profile-email">Email: {datap.email}</p>
        <p className="profile-email">Date of Birth: {datap.dob}</p>
        <p className="profile-email">Gender: {datap.gender}</p>
        <p className="profile-email">Blood Group: {datap.bloodgroup}</p>


      </div>
    </div>
  );
}

export default Profile;
