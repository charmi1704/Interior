import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'


function AFooter() {
    return (
        <>
         
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            © 2014 Yourdomain.com |<NavLink to="/" target="_blank"> Designed by : Shapel</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <Helmet>
                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/custom.js"></script>
                <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
            </Helmet>
        </>
    )
}

export default AFooter