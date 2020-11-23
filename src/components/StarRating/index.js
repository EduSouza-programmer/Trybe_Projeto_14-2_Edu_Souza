import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';

export class StarRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: null,
      hoverRating: null,
    };
  }

  async eventHandle(key, value) {
    const { onClick } = this.props;
    await this.setState({ [key]: value });
    onClick(this.state.rating);
  }

  setColorModeInput(range) {
    const { hoverRating, rating } = this.state;
    return range <= (hoverRating || rating) ? '#ffc107' : '#aaa';
  }

  setColorModeCard(range) {
    const { rating } = this.props;
    return range <= rating ? '#ffc107' : '#aaa';
  }

  RenderConfigModeCard() {
    return [...Array(5)].map((_star, index) => {
      const ratingValueInput = index + 1;
      return (
        <label key={index}>
          <icon.Star mode="card" color={this.setColorModeCard(ratingValueInput)} />
        </label>
      );
    });
  }

  render() {
    const { mode } = this.props;
    return (
      <css.Conteiner>
        {mode === 'card' && this.RenderConfigModeCard()}
        {mode === 'input' &&
          [...Array(5)].map((_star, index) => {
            const ratingValueInput = index + 1;
            return (
              <label key={index}>
                <input
                  className="rating"
                  type="radio"
                  name="rating"
                  value={ratingValueInput}
                  onClick={() => this.eventHandle('rating', ratingValueInput)}
                />
                <icon.Star
                  onMouseEnter={() =>
                    this.eventHandle('hoverRating', ratingValueInput)
                  }
                  onMouseLeave={() => this.eventHandle('hoverRating', null)}
                  color={this.setColorModeInput(ratingValueInput)}
                />
              </label>
            );
          })}
        {/* {[...Array(5)].map((_star, index) => {
          const ratingValueInput = index + 1;
          return (
            <label key={index}>
              <input
                className="rating"
                type="radio"
                name="rating"
                value={ratingValueInput}
                onClick={() => this.eventHandle('rating', ratingValueInput)}
              />
              <icon.Star
                onMouseEnter={() =>
                  this.eventHandle('hoverRating', ratingValueInput)
                }
                onMouseLeave={() => this.eventHandle('hoverRating', null)}
                color={this.setColorHandle(ratingValueInput)}
              />
            </label>
          );
        })} */}
      </css.Conteiner>
    );
  }
}

export default StarRating;
