import React from "react";

import man from "../img/man.png";
import family from "../img/family.png";
import you from "../img/you.jpg";

import styles from  './People.module.css';

const People = () => {
  return (
    <article className={styles.people}>
      <img src={man} className={styles.man} alt="Man" />
      <img src={family} className={styles.family} alt="Family" />
      <img src={you} className={styles.ghost} alt="ghost" />
    </article>
  );
};

export default People;