import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSearch, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import listUser from '../../data/list-user.json';  
const uuidv1 = require('uuid/v1');

class ListUsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            listData: listUser,
            newUser: {
                name: "",
                phone: "",
                role: ""
            }
        }
    }
    
    onHandleChangeKeywordSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onHandleChangeInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let { newUser } = this.state;
        newUser[name] = value;

        this.setState({
            newUser
        })
    }

    onHandleAddNewUser = () => {
        let { newUser, listData } = this.state;
        newUser.id = uuidv1();
        listData.unshift(newUser);
        this.setState({ 
            listData, 
            newUser: {
                name: '',
                phone: '',
                role: ''
            }
        })
    }

    render() {
        let { search, listData, newUser } = this.state;

        let listDataRender = listData.filter(data => data.name.includes(search));

        return (
            <>
               <div className="form-group has-search mt-4">
                    <FontAwesomeIcon icon={faSearch} className="form-control-feedback" />
                    <input type="text" className="form-control" placeholder="Search" value={search} onChange={this.onHandleChangeKeywordSearch}/>
                </div>

                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listDataRender.map((user, index) => (
                                    <tr key={index}>
                                        <th>{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary">
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button type="button" className="btn btn-success">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button type="button" className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div> 
                <div>
                    <div className="form-group">
                        <input type="text" name="name" value={newUser.name} className="form-control" 
                               placeholder="Enter name" onChange={this.onHandleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={newUser.phone} name="phone" className="form-control" onChange={this.onHandleChangeInput} placeholder="Phone" />
                    </div>

                    <select className="custom-select mb-2" id="inlineFormCustomSelect" name="role" onChange={this.onHandleChangeInput} value={newUser.role}>
                        <option defaultValue>Choose role...</option>
                        <option value={1}>Admin</option>
                        <option value={2}>SubAdmin</option>
                        <option value={3}>Manager</option>
                    </select>
                    <button type="submit" className="btn btn-primary mb-4" onClick={this.onHandleAddNewUser}>Add new user</button>
                </div>
            </>
        );
    }
}

export default ListUsersPage;