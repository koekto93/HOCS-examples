import React from 'react';

import getDisplayName from '../helper/getDisplayName';

export default function withForm(Component) {
  class WithForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ...props.initialData };
    }

    onChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    onSubmit = e => {
      e.preventDefault();
      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          data={this.state}
        />
      );
    }
  }

  //displayName - это то, как отображается имя компонента в react dev tools
  WithForm.displayName = `withForm(${getDisplayName(Component)})`;

  return WithForm;
}
