import React from 'react';

import getDisplayName from '../helper/getDisplayName';

export default function withHandlers(handlers) {
  return function(Component) {
    class WithHandlers extends React.Component {
      //ф-я, которая перебирает объект с handlers и каждому прокидывает props, создавая
      //новый объект. причина, по которой в оборачиваемом компоненте
      //писалось submit: (props) => value => ...
      handlers = Object.keys(handlers).reduce((acc, h) => {
        const handler = handlers[h];

        if (typeof handler !== 'function') {
          throw new Error('Handler should be a function');
        }

        acc[h] = handler(this.props);

        return acc;
      }, {});

      render() {
        return <Component {...this.props} {...this.handlers} />;
      }
    }

    //displayName - это то, как отображается имя компонента в react dev tools
    WithHandlers.displayName = `withHandlers(${getDisplayName(Component)})`;

    return WithHandlers;
  };
}
