import React, { Component } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";

import HomePage from '../pages/home/HomePage';
import ContactPage from '../pages/contact/ContactPage';
import UserPage from '../pages/users/UserPage';
import ListUsersPage from '../pages/users/ListUsersPage';

class Routes extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/contact-page" component={ContactPage} />
                    <Route path="/users/:id" component={UserPage} />
                    <Route path="/list-users" component={ListUsersPage} />
                </Switch>
            </div>
        );
    }
}

export default Routes;