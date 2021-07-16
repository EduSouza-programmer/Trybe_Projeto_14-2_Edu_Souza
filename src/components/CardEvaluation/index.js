import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../../components';

export class CardEvaluation extends Component {
  constructor() {
    super();
  }
  render() {
    const { email, message, rating } = this.props;
    return (
      <css.CtnRoot>
        <div className="ctn-center">
          <div className="ctn-emailRating">
            <h3 className="textEmail">{email}</h3>
            <cp.StarRating rating={rating} mode="card" />
          </div>
          <p>{message}</p>
        </div>
      </css.CtnRoot>
    );
  }
}

export default CardEvaluation;
