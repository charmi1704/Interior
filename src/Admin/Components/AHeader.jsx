import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function AHeader() {
    return (
        <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
            </Helmet>
            <div className="navbar navbar-inverse set-radius-zero">
                <div className="nav1 container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to="/admin-dashboard">
                            <span>
                                Shapel
                            </span>
                        </NavLink>
                    </div>
                    <div className="right-div">
                        <NavLink to="/Alogin" className="btn btn-danger pull-right">LOGIN</NavLink>
                    </div>
                </div>
                <section className="menu-section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="navbar-collapse collapse ">
                                    <ul id="menu-top" className="nav navbar-nav navbar-right">
                                        <li><NavLink to="/admin-dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Category<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_categories">Add Categories</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_categories">Manage Categories</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_employee">Add Employee</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_employee">Manage Employee</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Service<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_services">Add Services</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_services">Manage Services</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/Manage_user">User</NavLink></li>
                                        <li><NavLink to="/Manage_contact">Contact</NavLink></li>
                                        <li><NavLink to="/Manage_feedback">Feedback</NavLink></li>
                                        <li><NavLink to="/Aprofile">Profile</NavLink></li>

                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AHeader