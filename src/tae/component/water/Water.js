import styles from './Water.module.css';
import water from './img/water.png'

const Water = (props) => {
    console.groupCollapsed("Water() invoked."); console.groupEnd();
    
    return (
        <>
        <div className={styles.waterfilter}> 

        </div>
        <div className={styles.water}>
            <img className={styles.img} src={water}></img>
        </div>
        </>
    );
}

export default Water;