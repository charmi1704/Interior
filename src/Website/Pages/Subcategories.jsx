import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Subcategories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
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
                               Subcategories
                            </h2>
                        </div>
                        <div className="row">
                            {
                                data.map((value, index, arr) => {

                                    return (
                                        <div className="col-md-6 col-lg-4 mx-auto">
                                            <div className="card" style={{ maxWidth: 400 }}>
                                                <img className="card-img-top" src={value.img} alt="Card image" style={{ width: 'auto', height:400}} />
                                                <div className="card-body">
                                                    <h4 className="card-title">{value.service_name}</h4>
                                                    <p className="card-text">{value.desc}</p>
                                                    <h4 className="card-title">Rs.{value.price}</h4>
                                                    <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

export default Subcategories