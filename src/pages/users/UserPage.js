import React, { Component } from 'react';

class UserPage extends Component {
    render() {
        const { id } = this.props.match.params
        return (
            <div>
                user page {id}
            </div>
        );
    }
}

export default UserPage;