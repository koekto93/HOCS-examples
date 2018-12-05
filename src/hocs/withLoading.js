import React from 'react';

export default function withLoading(Component) {
  //наследование от Component, а не от React.Component
  return class extends Component {
    constructor(props) {
      super(props);
      //дописали в state новое поле
      this.state.loading = true;
    }

    //асинхронный componentDidMount!
    async componentDidMount() {
      if (super.componentDidMount) {
        //вызвали componentDidMount в переданном в HOC компоненте
        await super.componentDidMount();
      }
      this.setState({ loading: false });
    }

    render() {
      // render capture - "захват функции render"
      if (this.state.loading) {
        return <div>...loading...</div>;
      } else {
        //вызвали ф-ю render в переданном в HOC компоненте
        return super.render();
      }
    }
  };
}
