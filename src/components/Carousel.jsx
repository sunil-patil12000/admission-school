import React from 'react'

const Carousel = () => {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Welcome To</h5>
                                            <h1 className="display-3 text-white animated slideInDown">KLE Polytechnic Mahalingpur</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="/register" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Join Now</a>
                                            {/* <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="carousel-item">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best  Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Technical College</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="/register" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Join Now</a>
                                            {/* <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel