import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #2cd4d9, #5333ed);
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  border-bottom: 1px solid #33333350;
`;

export const Div = styled.div`
  /* background-color: purple; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 150px;
  flex-basis: 90%;
  height: 50px;

  .text-h1 {
    font-size: 20px;
    font-weight: 700;
  }
  .text-h3 {
    font-size: 18px;
  }
`;
