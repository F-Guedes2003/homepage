import React from 'react';
import styles from './CardAluno.module.css';

function CardTutor({ nome, srcFoto ,ano, lattes, mail, github }) {
  function Evento() {
    console.log('Teste do evento');
  }

  var altFoto = `Foto de ${nome}, tutor do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <img
        onMouseOver={Evento}
        className={styles.img}
        src={srcFoto}
        alt={altFoto}
      />
      <div className={styles.descricao}>
        <p className={styles.p}>{nome}</p>
        <p className={styles.p}>
          <b>Ingresso:</b> {ano}
        </p> 
        
      </div>
      <div className={styles.icons}>{/* Adicione seus ícones aqui */}</div>
    </div>
  );
}

export default CardTutor;