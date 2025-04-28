declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  
  type Produto = {
    id: number;
    name: string;
    hexCode: string;
    skus: SKU[]; 
    reference: string;
    type: string;
    price?: string;
    stock?: number; 
    imagens1: { path: string; id: number }[];
  };
  interface Props {
    produto: {
      skus: { 
        price: string;
        stock: number;
      }[];
      hexCode: string;
      name: string;
    };
  }
  type SKU = {
    id: number;
    size: string;
    stock: number;
    price: string;
    code: number;
    minQuantity: number;
    multipleQuantity: number;
  };

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
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
      gender:string;
      categories:string;
      subcategories:string | null;
  
  
    } | null;
  }