import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NotesList />
        <AddNote />
      </div>
    );
  }
}

export default App;