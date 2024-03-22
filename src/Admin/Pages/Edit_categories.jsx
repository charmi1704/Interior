import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit_categories() {

    const redirect = useNavigate();

    const [formvalue,setFormvalue]=useState({
        id:"",
        cate_name:"",
        img:""
    });

    useEffect(() => {
        fetch();
    }, []);

    const {id}=useParams();
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var res = true;
        if (formvalue.cate_name == "") {
            toast.error("Categories Name Field is required !");
            res = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error("Add img url Field is required !");
            res = false;
            return false;
        }
        
        return res;
    }

    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        if(validation())
        {
            const res = await axios.patch(`http://localhost:3000/categories/${id}`, formvalue);
            setFormvalue({ ...formvalue, cate_name: "", img: "" });
            toast.success('Data Update success');
            redirect('/Manage_categories');
            return false;
        }
    }

    return (
        <>
            
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h2>Edit Categories</h2>
                        </div>
                        <div className="panel-body">
                            <form role="form" action='' method='post' onSubmit={submitHandel}>
                                <div className="form-group">
                                    <label>Enter Category Name</label>
                                    <input className="form-control" name='cate_name' value={formvalue.cate_name} onChange={changeHandel} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input className="form-control" name='img' value={formvalue.img} onChange={changeHandel} type="text" />
                                    
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

export default Edit_categories