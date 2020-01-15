import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/homepage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Link to="/users/1">user chienvu</Link>
                <div className="arrow-up"></div>
            </div>
        );
    }
}

export default HomePage;