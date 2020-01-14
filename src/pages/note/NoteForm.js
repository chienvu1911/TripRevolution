import React, { Component } from 'react';

class NoteForm extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Update</button>
                </div>
            </>
        );
    }
}

export default NoteForm;