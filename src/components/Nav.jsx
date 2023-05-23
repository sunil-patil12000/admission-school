import Cookies from "js-cookie"
import { NavLink, useNavigate } from "react-router-dom"




const Nav = () => {

    const navigate = useNavigate();
    return (
        <>



            <nav className="navbar navbar-expand-lg bg-white navbar-light fixed shadow sticky-top p-0">
                <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><img src="/img/kle-logo.png" style={{ maxWidth: "60px", marginRight: "20px" }} />KLE POLTECHNIC MAHALINGPUR</h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>


                        {
                            !Cookies.get('user') ? (<>

                            </>) : (<>
                                <NavLink to="/admission" className="nav-item nav-link">Admission</NavLink>
                                <NavLink to="/profile" className="nav-item nav-link">Profile</NavLink>
                            </>)
                        }

                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        {/* <NavLink to="/about" className="nav-item nav-link">About</NavLink>

                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink> */}
                        {
                            !Cookies.get('user') ? (<>
                                <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                            </>) : (<>
                                <NavLink onClick={() => Cookies.remove('user')} className="nav-item nav-link">Logout</NavLink>
                            </>)
                        }
                    </div>

                    {
                        !Cookies.get('user') ? (<>
                            <NavLink to={"/register"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></NavLink>
                        </>) : (<>

                        </>)
                    }
                </div>
            </nav>




        </>
    )
}

export default Nav