import React from 'react';
import imgContato from '../../assets/images/contato.jpg';
import Head from '../../components/Head';
import styles from './styles.module.css';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Contato' description='Entre em contato' />
      <img src={imgContato} alt='Máquina de escrever' />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>ianfelix030@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua das Margaridas, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
