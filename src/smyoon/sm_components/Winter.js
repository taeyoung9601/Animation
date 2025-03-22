import styles from './Winter.module.css';

import content_04 from './img/content_04.png';

const Winter = (props) => {
    console.groupCollapsed("f Winter(", props, ") invoked.");



    console.groupEnd();
    return (
        <article className={ styles.winter }>
            <img src={ content_04 } className={ styles.winter_img_01 } alt="스키" />
        </article>
    );
}

export default Winter;