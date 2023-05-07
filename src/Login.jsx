import "./styleL.css"
const Login = () => {
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
                                    <form method="post">
                                        <div class="form-group first">
                                            <label for="username">Username</label>
                                            <input type="text" class="form-control" placeholder="your-email@gmail.com" id="username" />
                                        </div>
                                        <div class="form-group last mb-3">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" placeholder="Your Password" id="password" />
                                        </div>



                                        <input type="submit" value="Log In" class="btn btn-block btn-primary" />

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