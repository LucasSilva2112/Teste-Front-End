import { useState } from 'react';
import { TitleName, Ref, Preço, ValorAtual, BotaoMenos, BotaoMais, Quantidade, ValorTotal, NavFundo } from './styles'

interface Props {
    produto: {
        id: number;
        name: string;
        hexCode: string | null;
        skus: {
          id: number;
          size: string;
          stock: number;
          price: string;
          code: number;
          minQuantity: number;
          multipleQuantity: number;
        }[];
        reference: string;
        type: string;
    };
  }

function NavDaDos({ produto }: Props) {
     
    const sku = produto.skus[0];
    
    const [quantidade, setQuantidade] = useState(1);
    const [valorAtual, setValorAtual] = useState<number>(Number(sku.price));
    
    if (!produto) return null;
  
    const handleBotaoMais = () => {
      if (quantidade < sku.stock) {
        setQuantidade(quantidade + 1);
        setValorAtual(valorAtual + parseFloat(sku.price));
      }
    };
  
    const handleBotaoMenos = () => {
      if (quantidade > 1) {
        setQuantidade(quantidade - 1);
        setValorAtual(valorAtual - parseFloat(sku.price));
      }
    };
  
    return (
      <NavFundo>
        <Ref        translate="no">Ref:                  {produto.reference}       </Ref>
        <Preço      translate="no">R$:                   {sku.price}             </Preço>
        <TitleName  translate="no">                      {produto.name}          </TitleName>
        <BotaoMais  translate="no" onClick=              {handleBotaoMais}>  +   </BotaoMais>
        <ValorAtual translate="no">Atual <br/> R$:       {valorAtual.toFixed(2)} </ValorAtual>
        <BotaoMenos translate="no" onClick=              {handleBotaoMenos}> −   </BotaoMenos>
        <Quantidade translate="no">                      {quantidade}             </Quantidade>
        <ValorTotal translate="no">Acumulado <br/> R$:   {valorAtual.toFixed(2)} </ValorTotal>
      </NavFundo>
    );
}

export default NavDaDos;
