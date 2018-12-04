import React from 'react';

import BookForm from '../BookForm';
import enhance from '../../hocs/withBookshelf';

const initialBookData = {
  firstName: '',
  lastName: '',
};

const MobileBookshelf = ({ submit, onClick }) => {
  return (
    <div>
      <h2>Mobile</h2>
      <BookForm onSubmit={submit} initialData={initialBookData} />
    </div>
  );
};

//enhance - это вынесенный пакован HOC'ов
export default enhance(MobileBookshelf);
