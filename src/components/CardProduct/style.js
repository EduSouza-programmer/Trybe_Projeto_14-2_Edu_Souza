import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 30%;
  height: 40vh;
  background-color: white;
  border-radius: 13px;
  border: 1px solid black;
  margin: 10px;
  transition: all ease 0.2s;
  transform: scale(0.95);

  &:hover {
    transform: scale(1);
    border: 1px solid dodgerblue;
    box-shadow: 0 0 10px 0 dodgerblue;
  }

  .btn-addCartHome {
    background-color: #f5f5f5;
    outline: none;
    width: 70%;
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
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  width: 100%;
  background: linear-gradient(to right, #fffafa, #f5f5f5);
  height: 52px;
  text-align: center;
  border-radius: 13px 13px 0 0;
  padding: 10px;

  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  padding-right: 0.9em;

  &::before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
  }
`;

export const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  width: auto;
  height: auto;
`;

export const TextPrice = styled.p`
  font-size: 16px;
  color: #333;
`;

export const LinkDetails = styled(Link)`
  text-decoration: none;
  padding-bottom: 5px;
  font-style: italic;

  &:hover {
    text-decoration: underline;
  }
`;
