import React, { Component } from 'react';
import logo from './logo.svg';

import styled from 'react-emotion';


import StyledComponent from './components/styled-components';

const TealShadow = styled('div')`
  border: 1px solid red;
  box-shadow: 0 10px 6px -6px #777;
`;

const ShadowTealCenter = TealShadow.withComponent(StyledComponent.TealCenter);

class App extends Component {
  render() {
    return (
      <ShadowTealCenter primary={true} className="m-2">
        test
        <p className="my-p">inside para</p>
      </ShadowTealCenter>
    );
  }
}

export default App;
