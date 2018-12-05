import React from 'react';
import withLoading from '../../hocs/withLoading';
import withUsers from '../../hocs/withUsers';

class Users extends React.Component {
  render() {
    //данный users появился благодаря HOC'ам
    const { users } = this.props;
    return (
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    );
  }
}

export default withUsers(withLoading(Users));
