import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div>
      {nome}
      {propriedades.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </div>
  );
};

export default Produto;
