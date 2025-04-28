import styled from 'styled-components';

export const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  position: relative;
  background-color: white;
  border-bottom: 2px solid rgba(103, 122, 153, 0.68) ;
`;

export const ImagemContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const ImagemGrande = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
  border-radius: 10px;
  
`;

export const MiniaturasContainer = styled.div`
  display: flex;
  width:10px;
  margin-top: 2px;
  gap: 2px;
  transform: translateX(-300%);
  
  
`;

export const Miniatura = styled.img<{ selecionada: boolean }>`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ selecionada }) => (selecionada ? '2px solid #007bff' : '2px solid transparent')};
  transition: border 0.3s ease;
  position:relative;
  border-top:-10px

`;

export const SetasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  position:absolute;
  top:40%;
`;

export const BotaoSeta = styled.button`
  width: 25px;
  height: 25px;
  background-color: rgba(103, 122, 153, 0.68);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const BotaoI = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  position: absolute;
  top:90%;
  transform: translateX(-360%);
  display: flex;
  justify-content: center;
  align-items: center;     
  text-align: center;

`;

export const BotaoLupa = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 10px;
  text-align:center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  transform: translateX(-210%);
  position:absolute;
  top:90%;
  display: flex;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  

`;

export const BotaoCarrinho = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: -50px;
  bottom: 10px;
  display: flex;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  transform: translateX(-650%);


`;

export const LinhaHorizontal = styled.hr`
  width: 100%; 
  border: 0;
  border-top: 2px solid rgba(103, 122, 153, 0.68);; 
  margin: 1px 0; 
 background: transparent ;
`;

export const BotaoAlternadorAnterior = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 5px;
  font-size: 10px;
  cursor: pointer;
  border-radius: 20%;
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  transform: translateX(-400%);
  margin-top: -53px;
  font-family: arial ;

`;

export const BotaoAlternadorProximo = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 5px;
  font-size: 10px;
  cursor: pointer;
  border-radius: 20%;
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  transform: translateX(275%);
  margin-top: -53px ;
  font-family: arial ; 



`;