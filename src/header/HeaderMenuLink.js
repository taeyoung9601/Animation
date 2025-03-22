import { Link } from "react-router-dom";
import styles from "./HeaderMenuLink.module.css"; // CSS 모듈 경로

console.groupCollapsed("src/header/HeaderMenuLink.js");console.groupEnd();

function HeaderMenuLink(props) {
    console.groupCollapsed("f HeaderMenuLink(", props, ") invoked.");console.groupEnd();
    const { path, menuName } = props;

    return (
        <li>
            <Link to={ path } className={styles.link}>
                <button className={styles.linkbutton}>{ menuName }</button>
            </Link>
        </li>
    );
}

export default HeaderMenuLink;