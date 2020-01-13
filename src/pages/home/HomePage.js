import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/users/1">user chienvu</Link>
            </div>
        );
    }
}

export default HomePage;