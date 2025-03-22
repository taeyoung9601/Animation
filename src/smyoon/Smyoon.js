import styles from './Smyoon.module.css';
import { Background, Spring, Fall, Winter } from './sm_components';

const Smyoon = (props) => {
    console.groupCollapsed("f Smyoon(", props, ") invoked.");



    console.groupEnd();
    return (    
        <section className={styles.sm_body}>
            <Background />
            <Spring />
            <Fall />
            <Winter />
        </section>
    );
}

export default Smyoon;
