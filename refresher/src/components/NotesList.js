import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesList extends Component {
    render() {
        return (
            <div className="notes-list">
                <h1>My notes</h1>
                {!!this.props.notes.length ? 
                <ul>
                    {this.props.notes.map((note, index) => <li key={index} className="list-group-item">
                        <div>
                            <div>{note.title}</div>
                            <i className="material-icons">delete</i>
                        </div>
                        </li>)}
                </ul> : <p>Nothing to show</p>}
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