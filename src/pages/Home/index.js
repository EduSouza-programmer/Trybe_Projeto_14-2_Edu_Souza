import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../components/Icons';

import * as api from '../../services/api';
import * as storage from '../../services/storageService';
import * as cp from '../../components';
import * as css from './style';

export class Home extends Component {
  constructor() {
    super();
    this.getCurrentcategoryID = this.getCurrentcategoryID.bind(this);
    this.updateCartList = this.updateCartList.bind(this);
    this.fetchSearchButton = this.fetchSearchButton.bind(this);
    this.setState = this.setState.bind(this);
    this.state = {
      isLoading: false,
      currentID: '',
      products: [],
      searchInput: '',
      searchResults: true,
      cartProducts: [],
      sideBar: null,
    };
  }

  getCurrentcategoryID(obj) {
    this.setState(obj);

    this.setState({ isLoading: true }, async () => {
      const obj = await api.getProductsFromCategoryAndQuery(
        this.state.currentID,
        this.state.searchInput
      );
      this.setState({ products: obj.results, isLoading: false });
    });
  }

  updateCartList(product) {
    storage.addProductToCart('cartProducts', product);
    storage.getDataObjAndSet('cartProducts', this.setState);
  }

  componentDidMount() {
    storage.getDataObjAndSet('products', this.setState);
    storage.getDataObjAndSet('cartProducts', this.setState);
  }

  demandValidation(valid, obj) {
    valid
      ? this.setState({
          products: obj.results,
          searchResults: true,
          isLoading: false,
        })
      : this.setState({
          products: obj.results,
          searchResults: false,
          isLoading: false,
        });
  }

  fetchSearchButton() {
    storage.getDataAndSet('searchInput', (state) => this.setState(state));
    this.setState({ isLoading: true }, async () => {
      const obj = await api.getProductsFromCategoryAndQuery(
        this.state.currentID,
        this.state.searchInput
      );
      this.demandValidation(obj.paging.total, obj);
      console.log(this.state.searchResults);
    });
  }

  render() {
    const { isLoading, products, searchResults, cartProducts } = this.state;

    return (
      <>
        <cp.Header />
        <css.ConteinerHome>
          <css.ContLeft>
            <cp.SideBar nameState="currentID" callBack={this.getCurrentcategoryID} />
          </css.ContLeft>
          <css.ContRight>
            <css.ContSearch badge={cartProducts.length}>
              <cp.SearchInput keyStorage="searchInput" />
              <css.ButtonSearch
                data-testid="query-button"
                onClick={this.fetchSearchButton}
                type="button"
              >
                Buscar
              </css.ButtonSearch>
              <Link data-testid="shopping-cart-button" to="/shopcart">
                <div className="ctn-badge">
                  <Cart />
                  <div className="badge">{cartProducts.length}</div>
                </div>
              </Link>
            </css.ContSearch>
            <css.ContListDisplay>
              {products.length === 0 && !isLoading && (
                <css.DivCenter>
                  {!searchResults && (
                    <css.Text>Nenhum produto foi encontrado</css.Text>
                  )}
                  <css.Text data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </css.Text>
                </css.DivCenter>
              )}
              {isLoading ? (
                <css.DivCenter>
                  <cp.Loading />
                </css.DivCenter>
              ) : (
                products.map((prod) => (
                  <cp.CardProduct
                    key={prod.id}
                    id={prod.id}
                    thumbnail={prod.thumbnail}
                    price={prod.price}
                    callback={this.updateCartList}
                    productDetail={prod}
                    title={prod.title}
                  >
                    {prod.title}
                  </cp.CardProduct>
                ))
              )}
            </css.ContListDisplay>
          </css.ContRight>
        </css.ConteinerHome>
      </>
    );
  }
}

export default Home;
