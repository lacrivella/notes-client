import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';

function NoteForm({ title, body, handleTitleChange, handleBodyChange, handleSubmit }) {
  return (
    <section className={styles.NoteForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="enter title"
          onChange={handleTitleChange} />
        <textarea
          type="text"
          value={body}
          placeholder="enter task"
          onChange={handleBodyChange} />
        <button>Add to Tasks</button>
      </form>
    </section>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
