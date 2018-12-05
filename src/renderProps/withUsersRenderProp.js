import React from 'react';

export default class WithUsers extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    await new Promise(ok => setTimeout(ok, 1000));
    const users = await fetch('http://jsonplaceholder.typicode.com/users').then(
      r => r.json(),
    );
    this.setState({ users });
  }

  render() {
    const { children } = this.props;
    const { users } = this.state;
    //children - это та функция, которая лежит в компоненте, который мы "улучшаем"
    //прокидываем в children полученных users.
    return children(users);
  }
}
