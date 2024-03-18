import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function Add_categories() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        cate_name:"",
        img:""
    });

    const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault(); // stop page reload
        const res = await axios.post(`http://localhost:3000/categories`,formvalue);
        // console.log(res);
        if(res.status==201){
            setFormvalue({...formvalue,cate_name:"",img:""});
            alert('Categories submitted success');
            return false;
        }
    }
    return (
        <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>


            </Helmet>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Add Categories
                        </div>
                        <div className="panel-body">
                            <form role="form" action='' method='post' onSubmit={submithandle}>
                                <div className="form-group">
                                    <label>Enter Category Name</label>
                                    <input className="form-control" name='cate_name' value={formvalue.cate_name} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
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

export default Add_categories