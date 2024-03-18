import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="Website/css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="Website/css/ekko-lightbox.css" />
                <link href="Website/css/font-awesome.min.css" rel="stylesheet" />
                <link href="Website/css/style.css" rel="stylesheet" />
                <link href="Website/css/responsive.css" rel="stylesheet" />
            </Helmet>


            <header className="header_section innerpage_header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <NavLink className="navbar-brand" to="/">
                            <span>
                                Shapel
                            </span>
                        </NavLink>
                        <div className id>
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
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar