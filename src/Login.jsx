import { useState } from "react"
import "./styleL.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Cookies from "js-cookie"
const Login = () => {
    const navigate = useNavigate();
    const URL = "http://localhost:4545"
    const [uname, setUname] = useState();
    const [password, setPassword] = useState();

   

    const handellogin = async () => {


        const res = await axios.post(URL + '/login', {
            email: uname,
            pass: password
        })


        if (res.data === "login data not available") {
            alert(res.data)

            navigate('/register')
        } else {

            Cookies.set('user', res.data._id)



            navigate('/')
        }


    }








    return (
        <>




            <div class="d-md-flex half">
                <div class="bg ji" style={{ backgroundImage: " url('img/carousel-2.jpg')" }}></div>
                <div class="contents">

                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-12">
                                <div class="form-block mx-auto">
                                    <div class="text-center mb-5">
                                        <h3>Login</h3>

                                    </div>
                                    <form >
                                        <div class="form-group first">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" onChange={(e) => setUname(e.target.value)} class="form-control" placeholder="your-email@gmail.com" id="username" />
                                        </div>
                                        <div class="form-group last mb-3">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Your Password" id="password" />
                                        </div>



                                        <input type="submit" onClick={(e) => {
                                            e.preventDefault();
                                            handellogin()

                                        }} value="Log In" class="btn btn-block btn-primary" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        </>
    )
}

export default Login