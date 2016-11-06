import React from 'react';
import '../css/index.scss';

import logo from '../img/logo.png';

class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <h1>Build Test</h1>
        <img src={logo} />
      </div>
    );
  }
}

export default Container;
