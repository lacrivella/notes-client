import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

describe('NoteForm component', () => {
  it('renders NoteForm', () => {
    const wrapper = shallow(<NoteForm 
      title="Title"
      handleTitleChange={() => { }}
      body="body"
      handleBodyChange={() => { }}
      handleSubmit={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
