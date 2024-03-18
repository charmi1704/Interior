import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Service() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }
    return (
        <>


            <div>
                <section className="service_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Services
                            </h2>
                        </div>
                        <div className="row">
                            {
                                data.map((value, index, arr) => {

                                    return (
                                        <div className="col-md-6 col-lg-4 mx-auto">

                                            <div className="card" style={{ width: 400 , marginTop:50}} >
                                                <img className="card-img-top" src={value.img} alt="Card image" style={{height:"400px"}}/>
                                                <div className="card-body">
                                                    <h4 className="card-title"><h5>{value.cate_name}</h5></h4>
                                                    <p className="card-text">Some example text.</p>
                                                    <NavLink to={"/subcategories"}>
                                                        <button className='btn btn-dark'>Read More</button>
                                                    </NavLink>
                                                    {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                                                </div>
                                            </div>



                                            {/* <div className="box">
                                                <div className="img-box">
                                                    <img src={value.img}   alt="No img" />
                                                </div>
                                                <div className="detail-box">
                                                    <h5>{value.cate_name}</h5> */}
                                            {/* <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium
                                                    </p> */}
                                            {/* <NavLink to={"/subcategories"}>
                                                        Read More
                                                    </NavLink>
                                                </div>
                                            </div> */}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
                {/* end service section */}
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

export default Service