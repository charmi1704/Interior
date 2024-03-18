import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="Website/css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="Website/css/ekko-lightbox.css" />
                <link href="Website/css/font-awesome.min.css" rel="stylesheet" />
                <link href="Website/css/style.css" rel="stylesheet" />
                <link href="Website/css/responsive.css" rel="stylesheet" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
                <script src="Website/js/jquery-3.4.1.min.js"></script>
                <script src="Website/js/bootstrap.js"></script>
                <script src="Website/js/ekko-lightbox.min.js"></script>
                <script src="Website/js/custom.js"></script>

            </Helmet>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm justify-content-center fixed-top">
                    <NavLink className="navbar-brand" to="/">SHAPEL</NavLink>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Subcategories</NavLink>
                            </li> */}
                            <div className="right-div">
                        <NavLink to="/login" className="btn btn-danger pull-right">LOGIN</NavLink>
                    </div>
                    <div className="right-div">
                        <NavLink to="/signup" className="nav-link">sign up</NavLink>
                    </div>
                        </ul>
                    </nav>
                    {/* <nav className="navbar navbar-expand-lg custom_nav-container">
                        <NavLink className="navbar-brand" to="/">
                            <span>
                                Shapel
                            </span>
                        </NavLink>

                        <div>
                            <div className="custom_menu-btn">
                                <button onclick="openNav()">
                                    <span className="s-1"> </span>
                                    <span className="s-2"> </span>
                                    <span className="s-3"> </span>
                                </button>
                                <div id="myNav" className="overlay">
                                    <div className="overlay-content">
                                        <a href="index.html">Home</a>
                                        <a href="about.html">About</a>
                                        <a href="gallery.html">Gallery</a>
                                        <a href="service.html">Service</a>
                                        <a href="blog.html">Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav> */}
                </div>
            </header>

        </>
    )
}

export default Header