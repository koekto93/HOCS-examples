import React from 'react';
import withLoading from './withLoading';
import WithUsers from './withUsersRenderProp';

class Users extends React.Component {
  render() {
    //оборачиваем в компонент, а не используем декораторы
    return (
      <WithUsers>
        {data => (
          <ul>
            {data.map(u => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        )}
      </WithUsers>
    );
  }
}

export default Users;
