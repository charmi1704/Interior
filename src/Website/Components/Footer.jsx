import React from 'react'
import { Helmet } from 'react-helmet'

function Footer() {
    return (
        <>
            
            <footer className="footer_section">
                <div className="container">
                    <p>
                        © <span id="displayYear" /> All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </footer>
            <Helmet>
                <script src="Website/js/jquery-3.4.1.min.js"></script>  
                <script src="Website/js/bootstrap.js"></script>
                <script src="Website/js/ekko-lightbox.min.js"></script>
                <script src="Website/js/custom.js"></script>
                
            </Helmet>
        </>
    )
}

export default Footer