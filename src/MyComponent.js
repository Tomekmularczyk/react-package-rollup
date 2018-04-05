import React from 'react';
import Types from 'prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    message: Types.string,
  }

  static defaultProps = {
    message: '',
  }

  render() {
    return <div>hello world</div>
  }
}

export default MyComponent;
