import styles from './Fall.module.css';

import content_03 from './img/content_03.png';

const Fall = (props) => {
    console.groupCollapsed("f Fall(", props, ") invoked.");



    console.groupEnd();
    return (
        <article className={ styles.fall }>
            <img src={ content_03 } className={ styles.fall_img_01 } alt="열기구" />
        </article>
    );
}

export default Fall;