import styles from './Dolphin.module.css';
import dolphin from './img/dolphin.png';


const Dolphin = (props) =>{

    return(
        <>
        <div className={styles.dolphin}>

            <img src={dolphin} className={styles.img}></img>

        </div>

        </>
    );
}

export default Dolphin;