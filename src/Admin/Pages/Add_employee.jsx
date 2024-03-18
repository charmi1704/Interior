import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function Add_employee() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        img:"",
    });

    const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submithandle = async (e) => {
        e.preventDefault(); // stop page reload
        const res = await axios.post(`http://localhost:3000/employee`,formvalue);
        // console.log(res);
        if(res.status==201){
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",img:""});
            alert('Employee submitted success');
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
                            Add Employee
                        </div>
                        <div className="panel-body">
                            <form role="form" action='' method='post' onSubmit={submithandle}>
                                <div className="form-group">
                                    <label>Enter Name</label>
                                    <input className="form-control" name='name' value={formvalue.name} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input className="form-control" name='email' value={formvalue.email} onChange={getform} type="email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" name='password' value={formvalue.password} onChange={getform} type="password" />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No.</label>
                                    <input className="form-control" name='mobile' value={formvalue.mobile} onChange={getform} type="number" />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input className="form-control" name='img' value={formvalue.img} onChange={getform} type="text" />
                                </div>
                                <button type="submit" className="btn btn-info">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Add_employee