import React, { Component } from 'react';
import { Conteiner, Input } from './style';
import * as icon from '../Icons';
import * as storage from '../../services/storageService';

export class SearchInput extends Component {
  constructor() {
    super();

    this.handleOnchange = this.handleOnchange.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    storage.resetKey(this.props.keyStorage);
  }

  testevalue() {
    const local = localStorage.getItem('searchInput');
    console.log(local);
  }

  handleOnchange({ target: { name, value } }) {
    const { keyStorage } = this.props;
    this.setState({ [name]: value });
    storage.save(keyStorage, value);
    this.testevalue();
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Conteiner>
        <Input
          data-testid="query-input"
          type="text"
          onChange={this.handleOnchange}
          value={inputValue}
          name="inputValue"
        />
        <icon.Search className="icon" />
      </Conteiner>
    );
  }
}

export default SearchInput;
