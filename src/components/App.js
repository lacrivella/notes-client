import React from 'react';
// import CreateNote from '../containers/CreateNote';
import Notes from './Notes';

export default function App() {
  const notes = [{ title: "so", body: "yo" }];
  return <Notes notes={notes} />
};
