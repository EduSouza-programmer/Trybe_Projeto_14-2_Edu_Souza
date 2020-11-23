import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as storage from '../../services/storageService';
import * as cp from '../../components';
import * as icon from '../../components/Icons';
import * as css from './style';
import ProductDetails from '../ProductDetails';

export class ShopCart extends Component {
  constructor() {
    super();

    this.decrementAmountProduct = this.decrementAmountProduct.bind(this);
    this.addAmountProduct = this.addAmountProduct.bind(this);
    this.state = {
      cartProducts: [],
      total: '',
      isEmptyCart: false,
    };
  }

  searchProductById(id) {
    return this.state.cartProducts.find((prod) => prod.id === id);
  }

  decrementAmountProduct(id) {
    const findProduct = this.searchProductById(id);
    if (findProduct.amount > 1) {
      findProduct.amount -= 1;
      storage.updateCartProduct(findProduct);
      storage.getDataObjAndSet('cartProducts', (state) => this.setState(state));
      this.totalPurchase();
    }
  }
  addAmountProduct(id) {
    const findProduct = this.searchProductById(id);
    findProduct.amount += 1;
    storage.updateCartProduct(findProduct);
    storage.getDataObjAndSet('cartProducts', (state) => this.setState(state));
    this.totalPurchase();
  }

  totalPurchase() {
    if (storage.getDataItem('cartProducts')) {
      const products = storage.getDataObj('cartProducts');
      const total = products.reduce(
        (acc, { price, amount }) => amount * price + acc,
        0
      );
      this.setState({ total: total });
    }
  }

  cartIsNotEmpty() {
    const products = storage.getDataObj('cartProducts');
    if (products) {
      this.setState({ isEmptyCart: true });
    } else {
      this.setState({ isEmptyCart: false });
    }
  }

  componentDidMount() {
    storage.getDataObjAndSet('cartProducts', (state) => this.setState(state));
    this.totalPurchase();
    this.cartIsNotEmpty();
  }

  render() {
    const { cartProducts, total, isEmptyCart } = this.state;
    return (
      <css.Conteiner>
        <css.ContButtons>
          <Link to="/">
            <icon.Back />
          </Link>
          <icon.Cart size="1.5em" color="#aaa" />
        </css.ContButtons>
        <css.ContProductCart>
          {isEmptyCart ? (
            <div className="ctn-center">
              <div className="ctn-listProducts">
                {cartProducts.map((prop) => {
                  return (
                    <cp.CartItem
                      key={prop.id}
                      id={prop.id}
                      title={prop.title}
                      price={prop.price}
                      amount={prop.amount}
                      thumbnail={prop.thumbnail}
                      decrementAmount={this.decrementAmountProduct}
                      addAmount={this.addAmountProduct}
                      size="95%"
                    />
                  );
                })}
              </div>
              <div className="ctn-Sell">
                <h1 className="TextFinish">{`Valor total da Compra: R$ ${total}`}</h1>
                <button className="btn-finish" type="button">
                  Finalizar Compra
                </button>
              </div>
            </div>
          ) : (
            <>
              <icon.BoxOpen />
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            </>
          )}
        </css.ContProductCart>
      </css.Conteiner>
    );
  }
}

export default ShopCart;
