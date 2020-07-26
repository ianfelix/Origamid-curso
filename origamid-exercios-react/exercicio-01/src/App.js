import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const data = (dados) => {
    const name = dados.cliente;
    const idade = dados.idade;
    const situacao = dados.ativa;

    const colorGrenn = {
      color: 'green',
    };

    const colorRed = {
      color: 'red',
    };

    const preco = (dados) => {
      const numberPreco = dados.compras.map((compras) =>
        Number(compras.preco.replace('R$ ', ''))
      );
      return numberPreco.reduce((acc, val) => acc + val);
    };

    return (
      <>
        <h3>Nome: {name}</h3>
        <h3>Idade: {idade}</h3>
        <h3>
          Situação:
          <span style={situacao ? colorGrenn : colorRed}>
            {situacao ? ' Ativa' : ' Inativa'}
          </span>
        </h3>
        <h3>Total: R$ {preco(dados)}</h3>
        <h3>{preco(dados) > 10000 && 'Você está gastando muito'}</h3>
      </>
    );
  };

  return <div>{data(dados)}</div>;
};

export default App;
