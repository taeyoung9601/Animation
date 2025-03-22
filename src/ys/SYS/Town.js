import React from 'react';

import circle from "../img/circle.png";
import night from "../img/town_night.png";
import day from "../img/town_day.png";

import styles from  './Town.module.css';

const Town = () => {
    return (
      <article className={styles.town}>
        <img src={circle} className={styles.circle} alt="Circle" />
        <img src={night} className={styles.night} alt="Night Town" />
        <img src={day} className={styles.day} alt="Day Town" />
      </article>
    );
  };
  
  export default Town;