import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const noteList = notes.map(note => {
    return (
      <li key={note._id}>
        <Note title={note.title} body={note.body} />
      </li>
    );
  });
  return (
    <ul>
      {noteList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
