import React, { Component } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";

import HomePage from '../pages/home/HomePage';
import ContactPage from '../pages/contact/ContactPage';
import UserPage from '../pages/users/UserPage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact-page" component={ContactPage} />
                <Route path="/users/:id" component={UserPage} />
            </Switch>
        );
    }
}

export default Routes;