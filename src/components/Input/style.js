import styled from 'styled-components';

export const InputG = styled.input`
  border: 1px solid black;
  font-size: 16px;
  outline: none;
  padding: 4px 10px;
  transition: all ease 0.2s;
  color: #333;
  width: ${({ size }) => size};
  &:focus {
    border: 1px solid dodgerblue;
    box-shadow: 0 0 5px 0 dodgerblue;
  }
`;
