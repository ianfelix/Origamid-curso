import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Head';
import styles from './styles.module.css';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduto = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    };
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head
        title={produto.nome}
        descroption={`Esse é o nome do produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <p className={styles.preco}>{produto.preco}</p>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
