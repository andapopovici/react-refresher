import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as notesActions from '../actions/noteActions';

class NotesList extends Component {
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
            <div>
                <h1>My notes</h1>
                {this.props.notes.map((note, index) => <li key={index} className="list-group-item">{note.title}</li>)}

                <h2>Add note</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.note.title}
                />
                <br />
                <textarea onChange={this.onBodyChange}
                    value={this.state.note.body} />    
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                    className="btn btn-success" 
                    disabled={disableAddButton}/>    
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes        
    };
}

export default connect(mapStateToProps)(NotesList);