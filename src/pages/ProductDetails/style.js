import styled from 'styled-components';

export const Conteiner = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const ContButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;

export const ContGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fffafa;
  width: 90%;
  min-height: 87vh;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);

  .titleProduct {
    color: #333;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const ContProductDetails = styled.div`
  /* background-color: cyan; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  height: 50vh;
`;

export const ContImgAndAmount = styled.div`
  /* background-color: blue; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 48vh;
  border: 1px solid black;

  .imgProduct {
    max-width: 85%;
    max-height: 35vh;
    width: auto;
    height: auto;
    transform: scale(1.5);
  }
  .ctn-inputCont {
    /* background-color: tomato; */
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 85%;
    height: 12vh;

    .ctn-controller {
      /* background-color: palevioletred; */
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40%;
      height: inherit;
      flex-direction: column;
    }
    .ctn-ButtonAmout {
      /* background-color: blueviolet; */
      display: flex;
      justify-content: space-around;
      width: 80%;
      align-items: center;

      .amount {
        padding: 7px 11px;
        border-radius: 50%;
        border: 2px solid black;
      }
    }

    .linkToHome {
      width: 50%;
      height: 7vh;
    }

    .btn-addCart {
      background-color: #f5f5f5;
      outline: none;
      width: 100%;
      height: 7vh;
      color: #333;
      font-weight: 700;
      font-size: 16px;
      padding: 5px 7px;
      cursor: pointer;
      border: 1px solid #333;
      transform: scale(0.95);
      transition: transform ease 0.1s;

      &:hover {
        box-shadow: 0 0 7px 0 dodgerblue;
        border: 1px solid dodgerblue;
        background-color: white;
        transform: scale(1);
      }
      &:active {
        box-shadow: 0 0 7px 0 green;
        border: 1px solid green;
      }
    }
  }
`;

export const ContListDetails = styled.div`
  /* background-color: yellow; */

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50vh;

  .ctn-specifications {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 40vh;
    border: 1px solid black;

    .textSpe {
      font-size: 20px;
      margin: 0 30px 10px;
      align-self: flex-start;
    }

    .ctn-Text {
      /* background-color: pink; */
      width: 95%;
      height: 20vh;
    }
  }
`;

export const ContEvaluation = styled.div`
  /* background-color: pink; */
  background-color: white;
  display: flex;
  align-items: center;
  padding: 2%;
  width: 95%;
  height: 30vh;
  border: 1px solid black;
  margin-bottom: 20px;

  .centerEvaluation {
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;
    height: inherit;
  }

  .evaluationTitle {
    /* background-color: yellowgreen; */
    font-size: 20px;
    padding: 7px 0;
  }

  .ratingInput {
    /* background-color: tomato; */
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  .textArea {
    width: 97%;
    height: 10vh;
    margin: 5px;
    padding: 4px 10px;
    border: 1px solid black;
    outline: none;
    transition: all ease 0.2s;

    &:focus {
      border: 1px solid dodgerblue;
      box-shadow: 0 0 5px 0 dodgerblue;
    }
  }

  .btn-Evaluation {
    background-color: #f5f5f5;
    outline: none;
    width: 30%;
    color: #333;
    font-weight: 700;
    font-size: 16px;
    padding: 5px 7px;
    cursor: pointer;
    border: 1px solid #333;
    transform: scale(0.95);
    transition: transform ease 0.1s;
    margin: 10px 0 6px;

    &:hover {
      box-shadow: 0 0 7px 0 dodgerblue;
      border: 1px solid dodgerblue;
      background-color: white;
      transform: scale(1);
    }
    &:active {
      box-shadow: 0 0 7px 0 green;
      border: 1px solid green;
    }
  }
`;
