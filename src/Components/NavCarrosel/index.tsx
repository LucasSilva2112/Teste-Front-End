import { useEffect, useMemo, useState } from 'react';
import { GaleriaContainer, ImagemGrande, MiniaturasContainer, Miniatura, SetasContainer, BotaoSeta, BotaoCarrinho, BotaoI, BotaoLupa, LinhaHorizontal, BotaoAlternadorAnterior, BotaoAlternadorProximo } from './styles';
import produtos from '../../data/products.json';
import NavDaDos from '../../Components/NavDados';
import NavT from '../../Components/NavStock';
import Modal from '../Modals';

function Galeria() {
  const [produtoIndex, setProdutoIndex] = useState(0);
  const produto = produtos.products[produtoIndex];
  const imagens = useMemo(() => produto?.imagens1 || [], [produto]);

  const [imagemAtual, setImagemAtual] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const selecionarImagem = (index: number) => {
    setImagemAtual(index);
  };

  useEffect(() => {
    console.log(imagens); 
    setImagemAtual(0);
  }, [imagens, produtoIndex]);

  return (
    <>
      <GaleriaContainer>
        <ImagemGrande src={imagens[imagemAtual]?.path} alt="Imagem Principal" />
        <LinhaHorizontal />
        <SetasContainer>
          <BotaoSeta onClick={imagemAnterior}>&lt;</BotaoSeta>
          <BotaoSeta onClick={proximaImagem}>&gt;</BotaoSeta>
        </SetasContainer>

        <BotaoI translate='no' onClick={() => setIsModalOpen(true)}>i</BotaoI>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} produto={produto} />

        <BotaoLupa>🔍</BotaoLupa>

        <MiniaturasContainer>
          {imagens.map((imagem, index) => (
            <Miniatura
              key={imagem.id}
              src={imagem.path}
              alt={`Miniatura ${index + 1}`}
              onClick={() => selecionarImagem(index)}
              selecionada={index === imagemAtual}
            />
          ))}
        </MiniaturasContainer>

        <BotaoCarrinho>🛒</BotaoCarrinho>

        <div>
          <BotaoAlternadorAnterior onClick={() => setProdutoIndex((prev) => (prev === 0 ? produtos.products.length - 1 : prev - 1))}> ◀ Anterior </BotaoAlternadorAnterior>
          <BotaoAlternadorProximo onClick={() => setProdutoIndex((prev) => (prev === produtos.products.length - 1 ? 0 : prev + 1))}> Próximo ▶ </BotaoAlternadorProximo>
        </div>

      </GaleriaContainer>

      <NavDaDos produto={produto} />
      <NavT produto={produto} />
    </>
  );
}

export default Galeria;
