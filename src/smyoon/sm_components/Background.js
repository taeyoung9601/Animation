import styles from './Background.module.css';

import back_01 from './img/back_01.png';
import back_02 from './img/back_02.png';
import back_03 from './img/back_03.png';
import back_04 from './img/back_04.png';

const Background = (props) => {
    console.groupCollapsed("f Background(", props, ") invoked.");



    console.groupEnd();
    return (
        <>
        <img src={ back_01 } className={ styles.back_img_01 } alt="봄" />
        <img src={ back_02 } className={ styles.back_img_02 } alt="여름" />
        <img src={ back_03 } className={ styles.back_img_03 } alt="가을" />
        <img src={ back_04 } className={ styles.back_img_04 } alt="겨울" />
        </>
    );
}

export default Background;
