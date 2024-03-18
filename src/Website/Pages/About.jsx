import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'

function About() {
    return (
        <>
            {/* <Helmet>
                <link rel="stylesheet" type="text/css" href="Website/css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
                <link href="Website/css/font-awesome.min.css" rel="stylesheet" />
                <link href="Website/css/style.css" rel="stylesheet" />
                <link href="Website/css/responsive.css" rel="stylesheet" />

                <script src="Website/js/bootstrap.js"></script>
                <script src="Website/js/custom.js"></script>
                <script src="Website/js/jquery-3.4.1.min.js"></script>

            </Helmet> */}
            {/* <Navbar/> */}
            <div>
                
                <section className="about_section layout_padding ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src="Website/images/about-img.jpg" alt />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            About Us
                                        </h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                                    </p>
                                    <a href>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about section */}
                {/* info section */}
                <section className="info_section innerpage_info_section">
                    <div className="container">
                        <div className="row info_main_row">
                            <div className="col-md-6 col-lg-3">
                                <div className="info_insta">
                                    <h4>
                                        <a href="index.html" className="navbar-brand m-0 p-0">
                                            <span>
                                                Shapel
                                            </span>
                                        </a>
                                    </h4>
                                    <p className="mb-0">
                                        Asperiores at, error, delectus aut voluptatem provident cum quam magni necessitatibus molestias eveniet reprehenderit maiores voluptate.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_detail">
                                    <h4>
                                        Company
                                    </h4>
                                    <p className="mb-0">
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h4>
                                    Contact Us
                                </h4>
                                <div className="info_contact">
                                    <a href>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-envelope" />
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h4>
                                    Follow Us
                                </h4>
                                <div className="social_box">
                                    <a href>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default About