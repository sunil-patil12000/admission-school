import React, { useState } from "react";
import "./AdmissionForm.css";

const Admission= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",
    previousYearMarks: "",
    previousClass: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    aadhaarNumber: "",
    image: "",
  });



  console.log(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can submit the form data to the server or do other stuff here
  };

  return (
    <div className="admission-form-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              onChange={handleInputChange}
              value={formData.firstName}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              onChange={handleInputChange}
              value={formData.lastName}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fatherName">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              className="form-control"
              onChange={handleInputChange}
              value={formData.fatherName}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="motherName">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              id="motherName"
              className="form-control"
              onChange={handleInputChange}
              value={formData.motherName}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={handleInputChange}
            value={formData.gender}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="currentAddress">Current Address</label>
          <textarea
            name="currentAddress"
            id="currentAddress"
            className="form-control"
            onChange={handleInputChange}
            value={formData.currentAddress}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="permanentAddress">Permanent Address</label>
          <textarea
            name="permanentAddress"
            id="permanentAddress"
            className="form-control"
            onChange={handleInputChange}
            value={formData.permanentAddress}
            required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="previousYearMarks">Previous Year Marks</label>
              <input
                type="number"
                name="previousYearMarks"
                id="previousYearMarks"
                className="form-control"
                onChange={handleInputChange}
                value={formData.previousYearMarks}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="previousClass">Previous Class</label>
              <input
                type="text"
                name="previousClass"
                id="previousClass"
                className="form-control"
                onChange={handleInputChange}
                value={formData.previousClass}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="form-control"
                onChange={handleInputChange}
                value={formData.dateOfBirth}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="form-control"
                onChange={handleInputChange}
                value={formData.phoneNumber}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadhaarNumber">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaarNumber"
              id="aadhaarNumber"
              className="form-control"
              onChange={handleInputChange}
              value={formData.aadhaarNumber}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="form-control-file"
              onChange={handleInputChange}
              
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      );
    };
    
    export default Admission;
