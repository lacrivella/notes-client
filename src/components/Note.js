import React from 'react';
import PropTypes from 'prop-types';

function Note({ title, body }) {
  return (
    <>
    <p>{title}</p>
    <p>{body}</p>
    </>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
