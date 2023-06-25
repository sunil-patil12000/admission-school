import { useEffect, useState } from "react"
import axios, { all } from 'axios'
import { useNavigate } from "react-router-dom"
import OTPVerification from "./components/OTPpage";

const Register = () => {

    const navigate = useNavigate();


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const URL = "http://localhost:4545"
    const handlesubmit = () => {
        if (password === cpassword) {



            axios.post(URL + '/register', {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            }).then((res) => {

                console.log(res)



                if (res.data.error === "user Already registered") {
                    alert(res.data.error)
                    setFname('');
                    setLname('');
                    setEmail('');
                    setPassword('');
                    setCpassword('');
                    navigate('/register')

                }
                else {
                    alert("register done 👍")
                    navigate('/login');

                }

            })


        }
        else {
            alert("password mitch")


        }
    }

    return (
        <>

            <section className="h-100 bg-dark">
                <div className="container py-5 ">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo" className="img-fluid"
                                            style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Student registration form</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                        <input type="text" id="form3Example1m" onChange={(e) => {
                                                            setFname(e.target.value)
                                                        }} className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                        <input type="text" id="form3Example1n" onChange={(e) => {
                                                            setLname(e.target.value)
                                                        }} className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example8">Email</label>
                                                <input type="email" id="form3Example8" onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }} className="form-control form-control-lg" />
                                            </div>







                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example90">Password</label>
                                                <input type="password" onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }} id="form3Example90" className="form-control form-control-lg" />
                                            </div>



                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example97">Match Password</label>
                                                <input type="text" id="form3Example97" onChange={(e) => {
                                                    setCpassword(e.target.value)
                                                }} className="form-control form-control-lg" />
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">

                                                <button type="submit" onClick={handlesubmit} className="btn btn-warning btn-lg ms-2">Submit</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}

export default Register