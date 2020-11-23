import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import animation from './animation';

export default createGlobalStyle`




${reset}
${animation}



/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */



body {
  background-color: #f5f5f5;
  font-family:  Arial, Helvetica, sans-serif;
}



`;
