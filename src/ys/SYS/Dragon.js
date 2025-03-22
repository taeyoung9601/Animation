import React from "react";

import dra from '../img/dra.png';
import bul from "../img/bul.png";
import badac from "../img/badac.png";

import styles from './Dragon.module.css'; 

const Dragon = () => {
  return (
    <article className={styles.dragon}>
      <img src={dra} className={styles.dra} alt="dragon" />
      <img src={bul} className={styles.bul} alt="bul" />
      <img src={badac} className={styles.badac} alt="badac" />
    </article>
  );
};

export default Dragon;