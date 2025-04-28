import styled from 'styled-components'

export const Overlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    font-family: arial ;
    font-size:10px;

`

export const Content = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #6370f5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: arial ;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResultsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const ResultItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const CloseButtonB = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #c82333;
  }
`;