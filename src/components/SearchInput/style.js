import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  width: 80%;
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 30px;
  font-size: 18px;
  outline: none;
  padding: 5px 0px 5px 40px;
  flex: 1;
  transition: all ease 0.2s;
  color: #333;

  &:focus {
    border: 1px solid dodgerblue;
    box-shadow: 0 0 5px 0 dodgerblue;
  }

  &:focus + .icon {
    color: dodgerblue;
    transform: scale(1);
  }
`;
