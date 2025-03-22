import React from "react";

import {Town,People,Sky,Dragon} from '.';

import styles from "./AppS.module.css";



function AppS(){
    return(
        <div className={styles.world}>
            <h1 className={styles.h1}>Have a nice Day!!</h1>
            <section className={styles.section}>
                <Sky/>
                <Town/>
                <People/>
                <Dragon/>
            
            </section>
        </div>
    );

}

export default AppS;