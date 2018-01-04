import React, { Component } from 'react';

class NotesList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.getEmptyNote = this.getEmptyNote.bind(this);

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
        alert(`Saved note ${this.state.note.title}`);
        this.setState(this.getEmptyNote());
    }

    render() {
        return (
            <div>
                <h1>
                    My notes
                </h1>
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
                    onClick={this.onClickSave} />    
            </div>
        );
    }
}

export default NotesList;