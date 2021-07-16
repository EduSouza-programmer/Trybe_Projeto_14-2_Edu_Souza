import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';
import * as storage from '../../services/storageService';
import * as cp from '../../components';
import * as icon from '../../components/Icons';
import * as css from './style';

export class ProductDetails extends Component {
  constructor() {
    super();

    this.addAmountProduct = this.addAmountProduct.bind(this);
    this.decrementAmountProduct = this.decrementAmountProduct.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setRating = this.setRating.bind(this);
    this.eventEvaluationProduct = this.eventEvaluationProduct.bind(this);

    this.state = {
      productDetail: {},
      isLoading: false,
      pictureUrl: null,
      evaluationInputs: {
        email: '',
        message: '',
        rating: null,
      },
      product: {
        amount: 1,
      },
      evaluation: [],
    };
  }

  setRating(rating) {
    this.setState((prev) => ({
      evaluationInputs: { ...prev.evaluationInputs, rating: rating },
    }));
  }

  handleInput({ target: { value, name } }) {
    this.setState((prev) => ({
      evaluationInputs: { ...prev.evaluationInputs, [name]: value },
    }));
  }

  addAmountProduct() {
    this.setState((prev) => ({
      product: { ...prev.product, amount: prev.product.amount + 1 },
    }));
  }
  decrementAmountProduct() {
    const { amount } = this.state.product;
    if (amount > 1) {
      this.setState((prev) => ({
        product: {
          ...prev.product,
          amount: prev.product.amount - 1,
        },
      }));
    }
  }

  // decidir deixar só de raiva
  fetchProductDetails() {
    const {
      match,
      location: { productDetail },
    } = this.props;
    this.setState({ isLoading: true }, async () => {
      const obj = await api.getProductDetails(match.params.id);
      this.setState({
        productDetail: obj,
        isLoading: false,
        product: {
          id: productDetail.id,
          title: productDetail.title,
          amount: 1,
          price: productDetail.price,
          thumbnail: productDetail.thumbnail,
        },
        // pictureUrl: obj,
      });
    });
  }

  eventEvaluationProduct() {
    const { match } = this.props;
    const { evaluationInputs } = this.state;
    storage.addEvaluationProduct(match.params.id, evaluationInputs);
    this.setState({
      evaluationInputs: { email: '', message: '', rating: null },
      evaluation: storage.getDataObj(`Feeds-${match.params.id}`),
    });
  }

  getEvaluationProduct() {
    const { match } = this.props;
    const dataEvaluation = storage.getDataObj(`Feeds-${match.params.id}`);
    if (dataEvaluation) {
      this.setState({ evaluation: dataEvaluation });
    }
  }

  componentDidMount() {
    this.getEvaluationProduct();
    this.fetchProductDetails();
  }

  render() {
    const {
      isLoading,
      pictureUrl,
      product,
      evaluationInputs,
      evaluation,
    } = this.state;
    const {
      title,
      price,
      available_quantity,
      thumbnail,
    } = this.props.location.productDetail;

    // tive que tirar essa minha lógica para passa no teste :(
    /*   const { title, price } = this.state.productDetail; */

    return (
      <css.Conteiner>
        <css.ContButtons>
          <Link to="/">
            <icon.Back />
          </Link>
          <icon.Cart size="1.5em" />
        </css.ContButtons>
        <css.ContGeneral>
          <h1 data-testid="product-detail-name" className="titleProduct">
            {title}
          </h1>
          <css.ContProductDetails>
            <css.ContImgAndAmount>
              {isLoading ? (
                <div>
                  <cp.Loading />
                </div>
              ) : (
                <>
                  <img src={thumbnail} alt="produto" className="imgProduct" />
                  <div className="ctn-inputCont">
                    <div className="ctn-controller">
                      <h1>Quantidade</h1>
                      <div className="ctn-ButtonAmout">
                        <icon.Less onClick={this.decrementAmountProduct} />
                        <div className="amount">{product.amount}</div>
                        <icon.More onClick={this.addAmountProduct} />
                      </div>
                    </div>
                    <Link className="linkToHome" to="/">
                      <button
                        data-testid="product-detail-add-to-cart"
                        onClick={() =>
                          storage.addProductToCart('cartProducts', product)
                        }
                        className="btn-addCart"
                        type="button"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </css.ContImgAndAmount>
            <css.ContListDetails>
              {isLoading ? (
                <div>
                  <cp.Loading />
                </div>
              ) : (
                <>
                  <div className="ctn-specifications">
                    <h4 className="textSpe">Especificações Técnicas</h4>
                    <p className="ctn-Text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quod laborum exercitationem. Aliquid ea accusamus,
                      atque minus illum eos hic velit optio, ut suscipit neque
                      exercitationem culpa inventore sapiente quo? Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Dolorum quod laborum
                      exercitationem. Aliquid ea accusamus, atque minus illum eos hic
                      velit optio, ut suscipit neque exercitationem culpa inventore
                      sapiente quo?
                    </p>
                    <h2>{`R$ ${price}`}</h2>
                    <h3>{`Quantidade disponível: ${available_quantity}`}</h3>
                  </div>
                </>
              )}
            </css.ContListDetails>
          </css.ContProductDetails>
          <css.ContEvaluation>
            <div className="centerEvaluation">
              <h1 className="evaluationTitle">Avaliações</h1>
              <div className="ratingInput">
                <cp.Input
                  size="60%"
                  type="text"
                  placeholder="e-mail"
                  name="email"
                  value={evaluationInputs.email}
                  onChange={this.handleInput}
                />
                <cp.StarRating mode="input" onClick={this.setRating} />
              </div>
              <textarea
                data-testid="product-detail-evaluation"
                className="textArea"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Mensagem (opcional)"
                maxLength="300"
                value={evaluationInputs.message}
                onChange={this.handleInput}
              ></textarea>
              <button
                onClick={this.eventEvaluationProduct}
                className="btn-Evaluation"
                type="button"
              >
                Avaliar
              </button>
            </div>
          </css.ContEvaluation>
          {evaluation &&
            evaluation.map((ev, index) => (
              <cp.CardEvaluation
                key={index}
                email={ev.email}
                message={ev.message}
                rating={ev.rating}
              />
            ))}
        </css.ContGeneral>
      </css.Conteiner>
    );
  }
}

export default ProductDetails;
