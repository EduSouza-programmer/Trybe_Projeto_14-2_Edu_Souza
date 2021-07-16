import React, { Component } from 'react';
import * as css from './style';

export class Input extends Component {
  render() {
    const { type, placeholder, name, size, value, onChange } = this.props;
    return (
      <css.InputG
        onChange={(event) => onChange(event)}
        value={value}
        size={size}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    );
  }
}

export default Input;
