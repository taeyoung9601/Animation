import styles from './Star.module.css';


const Star = (props) => {
    console.groupCollapsed("Sun() invoked."); console.groupEnd();

    return (
        <div className={styles.starplace}>
            <div className={styles.star}>

            </div>
        </div>
    );
}

export default Star;