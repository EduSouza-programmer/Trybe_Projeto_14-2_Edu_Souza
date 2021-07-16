import styled, { css } from 'styled-components';

export const ConteinerHome = styled.div`
  display: flex;
  align-items: center;
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: yellow; */
`;

export const ContLeft = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  width: 30%;
  min-height: 85vh;
  padding-top: 60px;
`;

export const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: tomato; */
  width: 70%;
  min-height: 85vh;
  padding-top: 60px;
`;

export const ContSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  .ctn-badge {
    position: relative;
    padding: 10px;
  }

  ${(props) =>
    props.badge
      ? css`
          .badge {
            position: absolute;
            top: 0px;
            left: 30px;
            background-color: green;
            color: white;
            width: 2em;
            text-align: center;
            border-radius: 30%;
            padding: 7px 7px;
            font-size: 16px;
            transform: scale(0.6);
            font-weight: 700;
          }
        `
      : css`
          .badge {
            display: none;
          }
        `}
`;

export const ContListDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 95%;
  height: 80vh;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  background-color: #fffafa;
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
`;

export const Text = styled.p`
  font-size: 21px;
  padding-top: 30px;
  text-align: center;
`;

export const ButtonSearch = styled.button`
  background-color: #f5f5f5;
  outline: none;
  width: 10%;
  color: #333;
  font-weight: 700;
  font-size: 16px;
  padding: 5px 7px;
  border-radius: 7px;
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
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: inherit;
`;
