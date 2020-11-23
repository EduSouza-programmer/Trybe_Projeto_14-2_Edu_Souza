import styled, { css } from 'styled-components';
import * as icon from 'react-icons/fa';

const IconCssDefault = css`
  color: dodgerblue;
  font-size: 2.5em;
  cursor: pointer;
  transform: scale(0.8);
  transition: all ease 0.1s;
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(1.2);
  }
`;

export const Search = styled(icon.FaSearch)`
  color: #aaa;
  font-size: 1.5em;
  position: absolute;
  top: 5px;
  left: 12px;
  transform: scale(0.8);
  transition: all ease 0.2s;
`;

export const Cart = styled(icon.FaCartPlus)`
  ${IconCssDefault}
`;

export const Back = styled(icon.FaArrowLeft)`
  ${IconCssDefault}
  font-size: 3em;
`;

export const BoxOpen = styled(icon.FaBoxOpen)`
  font-size: 15em;
  color: dodgerblue;
`;

export const Star = styled(icon.FaStar)`
  font-size: 1.5em;
  cursor: ${(prop) => (prop.mode === 'input' ? 'pointer' : 'default')};
  transition: all ease 0.2s;
  margin: 0 5px;
`;

export const More = styled(icon.FaPlus)`
  ${IconCssDefault}
  font-size: 2em;
`;

export const Less = styled(icon.FaMinus)`
  ${IconCssDefault}
  font-size: 2em;
`;

export const Close = styled(icon.FaWindowClose)`
  ${IconCssDefault}
  font-size: 2em;
`;
