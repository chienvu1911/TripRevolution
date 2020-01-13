import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/avataaars.svg" alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">
                    chienvu94
                </h1>
                <p className="masthead-subheading font-weight-light mb-0">
                    Full Stack Developer
                </p>
                </div>
            </header>
        );
    }
}

export default Header;