import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h2>{dados.nome}</h2>
      <p>preço: R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
