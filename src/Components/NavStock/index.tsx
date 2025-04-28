//import { useState } from 'react';
import { NavStock, P, M, G, GG, Pack, NomeG, NomeGG, NomeM, NomeP, NomePack } from './styles'


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

function NavT({ produto }: Props) {    
       
    if (!produto) return null;

  const skuP =  produto.skus.filter(sku => sku.size === 'P');
  const skuM =  produto.skus.filter(sku => sku.size === 'M');
  const skuG =  produto.skus.filter(sku => sku.size === 'G');
  const skuGG = produto.skus.filter(sku => sku.size === 'GG');
  
  const getStock = (sku: { minQuantity: number }[]) => sku.length > 0 ? sku[0].minQuantity : 0;
  const total = getStock(skuP) + getStock(skuM) + getStock(skuG) + getStock(skuGG);
  
    return (
      <NavStock>
        <P>{getStock(skuP)}</P>
        <M>{getStock(skuM)}</M>
        <G>{getStock(skuG)}</G>
        <GG>{getStock(skuGG)}</GG>
        <Pack>{total}</Pack>

        <NomeP>P</NomeP>
        <NomeM>M</NomeM>
        <NomeG>G</NomeG>
        <NomeGG>GG</NomeGG>
        <NomePack translate='no'>Pack</NomePack>



      </NavStock>
    );
}

export default NavT;
