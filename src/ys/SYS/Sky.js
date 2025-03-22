import React from "react";

import sun from "../img/sun.png";
import moon from "../img/moon.png";
import cloud1 from "../img/cloud1.png";
import cloud2 from "../img/cloud2.png";

import styles from  './Sky.module.css';



const Sky=()=>{
    return(
    <aticle className={styles.Sky}>
        <div className={styles.rotateSun}>
        <img src={sun} className={styles.sun} art="sun"/>
        </div>
        <div>
        <img src={moon} className={styles.moon} art="moon"/>
        </div>
        <img src={cloud1} className={styles.cloud1} art="cloud1"/>
        <img src={cloud2} className={styles.cloud2} art="cloud2"/>        

    </aticle>
    );
};

export default Sky;