import styles from './Sky.module.css';
import sky from './img/sky.png';

const Sky = (props) =>{
    console.groupCollapsed("Sky() invoked."); console.groupEnd();

    return(
    <>
        <div className={styles.skyfilter}>

        </div>
        <div className={styles.skycolor}>
            <img className={styles.img} src={sky}></img>
        </div>
    </>
    );

}


export default Sky;