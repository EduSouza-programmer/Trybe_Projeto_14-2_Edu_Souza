import styled from 'styled-components';

export const CtnRoot = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.size};
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;

  .thumbImg {
    width: 20%;
    height: 12vh;
    margin-left: 16px;
  }
  .titleItem {
    width: 40%;
    text-align: center;
  }
`;
