import React, { Component } from 'react';
import { HeaderConteiner, Div } from './style';

export class Header extends Component {
  render() {
    return (
      <HeaderConteiner>
        <Div>
          <h1 className="text-h1">Projeto frontend online store</h1>
          <h3 className="text-h3">Edu souza_sd-07</h3>
        </Div>
      </HeaderConteiner>
    );
  }
}

export default Header;
