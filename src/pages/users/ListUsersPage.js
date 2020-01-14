import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSearch, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';  

class ListUsersPage extends Component {
    render() {
        return (
            <>
               <div className="form-group has-search mt-4">
                    <FontAwesomeIcon icon={faSearch} className="form-control-feedback" />
                    <input type="text" className="form-control" placeholder="Search" />
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Bootstrap 4 CDN and Starter Template</td>
                                <td>Cristina</td>
                                <td>2.846</td>
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
                            <tr>
                                <th scope="row">2</th>
                                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                                <td>Cristina</td>
                                <td>3.417</td>
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
                            <tr>
                                <th scope="row">3</th>
                                <td>Bootstrap Flexbox Tutorial and Examples</td>
                                <td>Cristina</td>
                                <td>1.234</td>
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
                        <option selected>Choose...</option>
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