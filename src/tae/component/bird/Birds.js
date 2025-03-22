import styles from './Bird.module.css';
import bird from './img/bird.png';

const Birds = (props) =>{
    console.groupCollapsed("Birds() invoked.");console.groupEnd();

    return(
        <>
        <div className={styles.bird}>
            <img src={bird} className={styles.img}></img>
        </div>
        </>
    );

}

export default Birds;