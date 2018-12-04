import React from 'react';

import withForm from '../../hocs/withForm';

function BookForm({ data, onChange, onSubmit }) {
  const { firstName, lastName } = data;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Book name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Author name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default withForm(BookForm);
