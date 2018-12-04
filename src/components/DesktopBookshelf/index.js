import React from 'react';

import BookForm from '../BookForm';
import withHandlers from '../../hocs/withHandlers';

const initialBookData = {
  firstName: '',
  lastName: '',
};
const DesktopBookshelf = ({ submit, onClick }) => {
  return (
    <div>
      <h2>Desktop</h2>
      <button onClick={onClick}>button</button>
      <BookForm onSubmit={submit} initialData={initialBookData} />
    </div>
  );
};

export default withHandlers({
  submit: props => values => {
    console.log(values);
  },
  onClick: () => event => {
    console.log('click');
  },
})(DesktopBookshelf);
