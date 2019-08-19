import React, { Component } from 'react';
import NoteForm from '../components/NoteForm';
import { createNote } from '../services/notesApi';

export default class CreateNote extends Component {
  state = {
    title: '',
    body: ''
  };

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      .then(note => console.log(note));
  }

  render() {
    const { title, body } = this.state;
    return (
      <section>
        <NoteForm
          title={title}
          body={body}
          handleTitleChange={this.handleTitleChange}
          handleBodyChange={this.handleBodyChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}