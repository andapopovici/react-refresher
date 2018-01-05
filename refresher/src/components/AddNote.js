import React, { Component } from 'react';
import * as notesActions from '../actions/noteActions';
import { connect } from 'react-redux';

class AddNote extends Component {
    constructor(props, context) {
        super(props, context);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

        this.state = this.getEmptyNote();
    }

    getEmptyNote() {
        return {
            note: { 
                title:  "",
                body: ""
            }
        };
    }

    onTitleChange(event) {
        const note = this.state.note;
        note.title = event.target.value;
        this.setState({
            note
        });
    }

    onBodyChange(event) {
        const note = this.state.note;
        note.body = event.target.value;

        this.setState({
            note
        })
    }

    onClickSave() {
        this.props.dispatch(notesActions.addNote(this.state.note));
        this.setState(this.getEmptyNote());
    }

    render() {
        const disableAddButton = this.state.note.title === "";
        return (
            <div className="add-note-form">
                <h2>Add note</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.note.title}
                    className="form-control" />
                <br />
                <textarea onChange={this.onBodyChange}
                    value={this.state.note.body}
                    className="form-control" />    
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                    className="btn btn-success" 
                    disabled={disableAddButton}/>    
            </div>
        );
    }
}

export default connect()(AddNote);