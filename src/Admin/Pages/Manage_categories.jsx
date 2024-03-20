import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Manage_categories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    //fetch data from api
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data); // set data from api in data var state
    }

    //delete
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        fetch();
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        img: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }
    const getform = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const validation = () => {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required');
            result = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required');
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('Image Field is required');
            result = false;
            return false;
        }
        return result;

    }

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/categories/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, cate_name: "", img: "" });
                toast.success('Update success');
                fetch();
            }
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Manage_categories
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Category Name</th>
                                            <th>Category Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((value, index, arr) => {

                                                return (
                                                    <tr className="odd gradeX">
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_name}</td>
                                                        <td><img src={value.img} width="50px"  ></img></td>
                                                        <td className='center'>
                                                            <button className='btn btn-danger' onClick={() => deletehandle(value.id)}>Delete</button>
                                                            <button className='btn btn-primary' onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>

                                                            <div className="modal" id="myModal">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        {/* Modal Header */}
                                                                        <div className="modal-header">
                                                                            <h4 className="modal-title">Edit Profile</h4>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                        </div>
                                                                        {/* Modal body */}
                                                                        <div className="modal-body">
                                                                            <div className='container'>
                                                                                <form action="" method="post" >
                                                                                    <div className="row g-3">
                                                                                        <div className="col-md-6">
                                                                                            <div className="form-floating">
                                                                                                <input type="text" className="form-control" name="name" value={formvalue.name} onChange={getform} id="name" placeholder="Your Name" />
                                                                                                <label htmlFor="name">Your Name</label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <div className="form-floating">
                                                                                                <input type="email" className="form-control" name="email" value={formvalue.email} onChange={getform} id="email" placeholder="Your Email" />
                                                                                                <label htmlFor="email">Your Email</label>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-md-6">
                                                                                            <div className="form-floating">
                                                                                                <input type="number" className="form-control" name="mobile" value={formvalue.mobile} onChange={getform} id="email" placeholder="Your Email" />
                                                                                                <label htmlFor="email">Your Mobile</label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-12">
                                                                                            <div className="form-floating">
                                                                                                <input type="url" className="form-control" name="img" value={formvalue.img} onChange={getform} id="email" placeholder="Your Email" />
                                                                                                <label htmlFor="email">Your Image</label>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-12">
                                                                                            <button onClick={submithandel} data-bs-dismiss="modal" className="btn btn-primary w-100 py-3" type="submit">Save</button>

                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                        {/* Modal footer */}
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Manage_categories