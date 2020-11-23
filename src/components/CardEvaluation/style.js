import styled from 'styled-components';

export const CtnRoot = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 20vh;
  margin: 7px 0;
  border: 1px solid black;

  padding: 2%;

  .ctn-center {
    /* background-color: gray; */
    display: flex;
    flex-direction: column;

    width: 70%;
  }

  .ctn-emailRating {
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 64%;
    height: inherit;
    margin-bottom: 16px;

    .textEmail {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
