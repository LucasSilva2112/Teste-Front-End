import { Overlay, Content, CloseButton } from './styles'



const Modal = ({ isOpen, onClose, produto }: ModalProps) => {
  if (!isOpen || !produto) return null;

  return (
    <Overlay>
      <Content>
        <h2>Nome do Produto : {produto.name}</h2>
        <p>Referência:        {produto.reference}</p>
        <p>Tipo:              {produto.type}</p>
        <p>Genero:            {produto.gender}</p>
        <p>Categoria:         {produto.categories}</p>
        <p>Sub-Categoria:     {produto.subcategories}</p>
        <h3>SKUs:</h3>
        <ul>
          {produto.skus.map((sku) => (
            <li key={sku.id}>Tamanho: {sku.size} | Estoque: {sku.stock} | Preço: {sku.price}
            </li>
          ))}
        </ul>

        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </Content>
    </Overlay>
  );
};



export default Modal;
