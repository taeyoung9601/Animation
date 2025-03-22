import styles from './Spring.module.css';

import content_01 from './img/content_01.png';

const Spring = (props) => {
    console.groupCollapsed("f Spring(", props, ") invoked.");



    console.groupEnd();
    return (
        <article className={ styles.spring }>
            <img src={ content_01 } className={ styles.spring_img_01 } alt="열기구" />
        </article>
    );
}

export default Spring;
