import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';

export class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      title,
      price,
      amount,
      thumbnail,
      size,
      id,
      decrementAmount,
      addAmount,
    } = this.props;
    return (
      <css.CtnRoot size={size}>
        <icon.Close />
        <img className="thumbImg" src={thumbnail} alt="product" />
        <h4 data-testid="shopping-cart-product-name" className="titleItem">
          {title}
        </h4>
        <icon.Less
          data-testid="product-decrease-quantity"
          onClick={() => decrementAmount(id)}
        />
        <div data-testid="shopping-cart-product-quantity">{amount}</div>
        <icon.More
          data-testid="product-increase-quantity"
          onClick={() => addAmount(id)}
        />
        <p>{`R$ ${price}`}</p>
      </css.CtnRoot>
    );
  }
}

export default CartItem;
