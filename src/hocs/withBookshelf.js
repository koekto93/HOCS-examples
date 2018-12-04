import withHandlers from '../hocs/withHandlers';

// так можно вынести и сделать тут много хоков, чтобы не захломлять сам компонент
//в котором этот "улучшатель" будет использован
export default withHandlers({
  submit: props => values => {
    console.log(values);
  },
  onClick: () => event => {
    console.log('click');
  },
});
