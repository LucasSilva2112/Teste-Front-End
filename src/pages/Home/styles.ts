import styled from 'styled-components';

export const Fundo = styled.div`
  width: 535px;
  max-width: 100%; 
  height: auto; 
  min-height: 100vh;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  background-color: rgba(117, 117, 117, 0.26);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

 
  @media (max-width: 768px) {
    width: 90%;
    height: 50vh; 
  }
  @media (max-width: 480px) {
    width: 95%;
    height: 40vh;
  }
`;
