import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Add_services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({

        id: "",
        cate_id: "",
        name: "",
        desc: "",
        price: "",
        img: "",
        status: "",
    });
    

    const getform = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),status:"Available",  [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault(); // stop page reload
        const res = await axios.post(`http://localhost:3000/services`, formvalue);
        // console.log(res);
        if (res.status == 201) {
            setFormvalue({ ...formvalue, cate_id: "", cate_img: "" });
            alert('Services submited success');
            return false;
          }
    }
    return (
        <>
           
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Add Services
                        </div>
                        <div >
                            <form role="form" action='' method='post' onSubmit={submithandle}>
                                <div className="form-group">
                                    <label>Enter Category Name</label>
                                    <select className="form-control" name='cate_id' value={formvalue.cate_id} onChange={getform}>
                                        <option value="">-------  Select Categories of Services ---------</option>
                                        {
                                            data.map((value, index, arr) => {
                                                return (
                                                    <option value={value.id}>{value.cate_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Enter Service Name</label>
                                    <input className="form-control" name='service_name' value={formvalue.service_name} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Enter Description</label>
                                    <textarea className="form-control" name='desc' value={formvalue.desc} onChange={getform} rows={3} defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input className="form-control" name='price' value={formvalue.price} onChange={getform} type="number" />
                                </div>
                                <div className="form-group">
                                    <label>Service Image</label>
                                    <input className="form-control" name='img' value={formvalue.img} onChange={getform} type="text" />
                                </div>
                                <button type="submit" className="btn btn-info">Send  </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Add_services