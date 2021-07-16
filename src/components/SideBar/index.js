import React, { Component } from 'react';
import * as cp from '../Loading';
import * as css from './style';
import * as api from '../../services/api';

export class SideBar extends Component {
  constructor() {
    super();
    this.handleEventClick = this.handleEventClick.bind(this);

    this.state = {
      categoryID: '',
      categories: [],
      isLoading: false,
    };
  }

  // resolvi testa assim, funciona :) só foi um teste mesmo.
  async handleEventClick({ target: { name, value } }) {
    const { callBack, nameState } = this.props;
    await this.setState({ [name]: value });
    callBack({ [nameState]: this.state.categoryID });
  }

  fetchCategories() {
    this.setState({ isLoading: true }, async () => {
      const obj = await api.getCategories();
      this.setState({ categories: obj, isLoading: false });
    });
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const { isLoading, categories } = this.state;

    return (
      <css.Conteiner>
        {isLoading ? (
          <css.DivLoading>
            <cp.Loading />
          </css.DivLoading>
        ) : (
          <>
            <css.TitleH1>Categories</css.TitleH1>
            <css.RadioConteiner>
              <css.RadioInput
                type="radio"
                id="all"
                value=""
                name="categoryID"
                onClick={this.handleEventClick}
                defaultChecked
              />
              <css.TextLabel htmlFor="all">All</css.TextLabel>
            </css.RadioConteiner>
            {categories.map((cat) => {
              return (
                <css.RadioConteiner key={cat.id}>
                  <css.RadioInput
                    type="radio"
                    id={cat.id}
                    name="categoryID"
                    value={cat.id}
                    onClick={this.handleEventClick}
                    data-testid="category"
                  />
                  <css.TextLabel htmlFor={cat.id}>{cat.name}</css.TextLabel>
                </css.RadioConteiner>
              );
            })}
          </>
        )}
      </css.Conteiner>
    );
  }
}

export default SideBar;
