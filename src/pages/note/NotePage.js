import React, { Component } from 'react';
import firebase from '../../firebaseConfig';

class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        let _this = this;
        let dataNote = firebase.database().ref('dataNode/');
            dataNote.once('value').then((snapshot)=> {
                _this.setState({
                    data: Object.values(snapshot.val())
                })
        })
    }

    render() {
        let { data } = this.state;
        return (
            <>
            {
                data.length > 0 ?
                data.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                    </div>
                ))
                : null
            }
            </>
        );
    }
}

export default NotePage;