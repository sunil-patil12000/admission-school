import React, { useState } from "react";
import "./AdmissionForm.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Admission = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    lid: Cookies.get('user'),
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",
    branch: "",
    previousYearMarks: "",
    previousClass: "",
    board: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    aadhaarNumber: "",
  });

  const [file, setFile] = useState(null);
  const [aadhaarimg, setAadhaarimg] = useState(null);
  const [pymc, setPymc] = useState(null);
  const [ci, setCI] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [visible, setVisible] = useState(false)

  const handleotp = (e) => {
    e.preventDefault()
    console.log(formData.email)

    if (formData.email === '' && !formData.email) {
      alert('Please Enter Email Id')


    } else {



      axios.post("http://localhost:4545/otpgen", {
        email: formData.email,
      }).then((res) => {
        console.log(res)
        if (res.data.message === 'OTP sent successfully') {
          setVisible(true);
          console.log(res.data)
          setCotp(res.data.otp)

        }

      }
      ).catch((e) => console.log(e))

    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();


    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      alert("Please fill in all the fields.");
      return;
    }


    Object.assign(formData, {
      image: file,
      aadhaarimg: aadhaarimg,
      pymc: pymc,
      ci: ci,
    });

    axios
      .post("http://localhost:4545/admission", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setFormData({
            firstName: "",
            lastName: "",
            fatherName: "",
            motherName: "",
            gender: "",
            currentAddress: "",
            permanentAddress: "",
            branch: "",
            previousYearMarks: "",
            previousClass: "",
            board: "",
            dateOfBirth: "",
            phoneNumber: "",
            email: "",
            aadhaarNumber: "",
          });
          navigate("/profile");
        }
      })
      .catch((e) => console.log(e));
  };


  const [otp, setOTP] = useState('');
  const [resp, setResp] = useState('');
  const [sub, setSub] = useState(false);
  const [cotp, setCotp] = useState('');

  const handleVerifyOTP = () => {


    axios.post('http://localhost:4545/otpverify', {
      otp: otp
    }).then((res) => {
      console.log(res)
      if (res.data.message === 'OTP verification successful') {
        setSub(true)
      }
    })

    // if (cotp === otp) {
    //   setSub(true)
    //   console.log(cotp + " = " + otp)
    // }

  };



  return (
    <div className="admission-form-container">
      <h2>Admission Form</h2>
      <form >
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
        <div className="form-group">
          <label htmlFor="branch">Select Branch</label>
          <select
            name="branch"
            id="branch"
            className="form-control"
            onChange={handleInputChange}
            value={formData.branch}
            required
          >
            <option value="">-- Select Branch --</option>
            <option value="CSE">CSE</option>
            <option value="E&E">E&E</option>
            <option value="CIVIL">CIVIL</option>
            <option value="EC">EC</option>
            <option value="MECH">MECH</option>
          </select>
        </div>
        <div className="form-row gap-2">
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
          <div className="form-group">
            <label htmlFor="gender">Board</label>
            <select
              name="board"
              id="board"
              className="form-control"
              onChange={handleInputChange}
              value={formData.board}
              required
            >
              <option value="">-- Select Board --</option>
              <option value="State Board">State Board</option>
              <option value="CBSE Board">CBSE Board</option>
            </select>

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
          <label htmlFor="image">Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            className="form-control-file"
            onChange={handleFileInputChange}

          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Aadhaar photo:</label>
          <input
            type="file"
            accept=".pdf"
            name="aadhaar-img"
            id="aadhaar-img"
            className="form-control-file"
            onChange={(e) => setAadhaarimg(e.target.files[0])}

          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Previous Year Marks Card Photo:</label>
          <input
            type="file"
            name="pymc"
            id="pymc"
            accept=".pdf"
            className="form-control-file"
            onChange={(e) => setPymc(e.target.files[0])}

          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Cast & Income photo :</label>
          <input
            type="file"
            name="ci"
            id="ci"
            accept=".pdf"
            className="form-control-file"
            onChange={(e) => setCI(e.target.files[0])}

          />
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
          <button className="btn btn-primary mt-2" onClick={(e) => handleotp(e)}>Send OTP</button>

        </div>
        {
          visible ? (<><div className="form-group">
            <label htmlFor="email">Enter OTP</label>
            <input
              type="text"
              name="otp"
              id="otp"
              className="form-control"
              onChange={(e) => setOTP(e.target.value)}
              value={otp}

            />

            <button className="btn btn-primary mt-2" onClick={(e) => {
              e.preventDefault()
              handleVerifyOTP()
            }}>Submit OTP</button>
            <span className="ms-2 fa-1x fw-semibold">{resp}</span>
          </div></>) : (<></>)
        }


        {
          sub ? (<><button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">
            Submit
          </button></>) : (
            <> </>

          )
        }

      </form>
    </div>
  );
};

export default Admission;







