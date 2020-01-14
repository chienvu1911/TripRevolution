import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSearch, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import listUser from '../../data/list-user.json';  

class ListUsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            listData: listUser
        }
    }
    
    onHandleChangeKeywordSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        let { search, listData } = this.state;
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
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <select className="custom-select mb-2" id="inlineFormCustomSelect">
                        <option defaultValue>Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    <button type="submit" className="btn btn-primary mb-4">Add new user</button>
                </form>
            </>
        );
    }
}

export default ListUsersPage;