import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffafa;
  width: 90%;
  height: 85vh;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
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

export const TitleH1 = styled.h1`
  font-size: 20px;
  color: #333;
  padding: 30px 0;
`;

export const RadioConteiner = styled.div`
  width: 80%;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 7px;

  &:checked + label {
    border: 1px solid black;
  }
  &:checked + label::after {
    content: '✓';
    color: white;
    font-size: 16px;
    border: 1px dashed black;
    margin-left: 5px;
    background-color: green;
  }
`;

export const TextLabel = styled.label`
  font-size: 16px;
`;

export const DivLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: inherit;
`;
