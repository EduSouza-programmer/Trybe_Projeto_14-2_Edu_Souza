import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: yellow; */
`;

export const ContButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;

export const ContProductCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffafa;
  width: 90%;
  min-height: 87vh;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);

  .ctn-center {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 95%;
    height: 75vh;
  }

  .ctn-listProducts {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    width: 60%;
    height: 70vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: dodgerblue;
      border-radius: 20px;
      border: 3px solid dodgerblue;
    }
  }

  .ctn-Sell {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 20vh;

    .TextFinish {
      font-size: 18px;
    }

    .btn-finish {
      background-color: #f5f5f5;
      outline: none;
      width: 85%;
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
