import styles from './Sun.module.css';

const Sun = (props) => {
    console.groupCollapsed("Sun() invoked."); console.groupEnd();

    return (
        <div className={styles.sunplace}>
            <div className={styles.sun}>

            </div>
        </div>
    );
}

export default Sun