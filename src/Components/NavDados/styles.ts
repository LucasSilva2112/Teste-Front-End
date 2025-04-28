import styled from 'styled-components'

export const NavFundo = styled.div`
  color:black;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 20px; 
  margin-top: 1px;
  background-color:white;
  height:60px;
`;

export const TitleName = styled.div`
  display: flex; 
  position:absolute;
  margin-top:-30px;
  font-size:10px;
  left:125px;
  font-family: arial ; 
`;

export const Ref = styled.div`
  display: flex; 
  position:absolute;
  margin-top:-30px;
  font-size:10px;
  left:218px;
  font-family: arial ; 
`;

export const Preço = styled.div`
  display: flex; 
  position:absolute;
  margin-top:-30px;
  font-size:10px;
  left:360px;
  font-family: arial ; 
`;

export const ValorAtual = styled.div`
  display: flex; 
  position:absolute;
  margin-top:20px;
  font-size:10px;
  left:135px;
  text-align:center;
  font-family: arial ; 
`;

export const BotaoMais = styled.button`
background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 10px;
  font-size: 35px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;     
  text-align: center;
  margin-top:30px;
  left:200px;

`;

export const BotaoMenos = styled.button`
  background-color: rgba(103, 122, 153, 0.68);
  color: white;
  border: none;
  padding: 10px;
  font-size: 35px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;     
  text-align: center;
  right:200px;
  margin-top:30px;



`;

export const Quantidade = styled.div`
background-color: rgba(103, 122, 153, 0.68);
width:15px;
height:20px;
justify-content:center;
align-items:center;
display:flex;
color:white;
margin-top:20px;
font-family: arial ; 
`;

export const ValorTotal = styled.div`
display: flex; 
  position:absolute;
  margin-top:20px;
  font-size:10px;
  right:125px;
  text-align:center;
  font-family: arial ; 
`;

