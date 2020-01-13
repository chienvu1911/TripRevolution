import React, { Component } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";

import HomePage from '../pages/home/HomePage';
import ContactPage from '../pages/contact/ContactPage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact-page" component={ContactPage} />
            </Switch>
        );
    }
}

export default Routes;