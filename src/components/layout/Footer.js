import React, { Component } from "react"; 

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">2215 John Daniel Drive
                        <br />Clark, MO 65243</p>
                    </div>
                    
                    <div className="col-lg-6">
                    <h4 className="text-uppercase mb-4">About Freelancer</h4>
                    <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
                        <a href="http://startbootstrap.com">Trip Revolution</a>.</p>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
