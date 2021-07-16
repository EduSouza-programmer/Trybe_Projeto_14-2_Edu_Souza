import React, { Component } from 'react';
import * as css from './style';
import * as api from '../../services/api';

export class CardProduct extends Component {
  constructor(props) {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, price, thumbnail, id, callback } = this.props;
    const product = {
      id: id,
      title: title,
      amount: 1,
      price: price,
      thumbnail: thumbnail,
    };
    callback(product);
  }
  render() {
    const { children, thumbnail, price, id, productDetail } = this.props;

    return (
      <css.Conteiner data-testid="product">
        <css.Title>{children}</css.Title>
        <css.Image src={thumbnail} alt="Product Image" />
        <css.TextPrice>{`R$ ${price}`}</css.TextPrice>

        <button
          onClick={this.addToCart}
          data-testid="product-add-to-cart"
          className="btn-addCartHome"
        >
          Adicionar ao Carrinho
        </button>
        <css.LinkDetails
          to={{
            pathname: `/product/${id}`,
            productDetail: productDetail,
          }}
          data-testid="product-detail-link"
        >
          Detalhes
        </css.LinkDetails>
      </css.Conteiner>
    );
  }
}

export default CardProduct;
