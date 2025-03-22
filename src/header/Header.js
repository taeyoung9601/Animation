import styles from "./Header.module.css"; // CSS 모듈 경로
import HeaderMenuLink from './HeaderMenuLink';

// - 헤더 (메뉴바)
// about
// sports (종목소개는 상단 메뉴바에서도 들어갈 수 있다는 의미,,,)
// gallery
// youtube
// news

function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.navList}>
                <div className={styles.logo}></div>
                <HeaderMenuLink path="/" menuName="석현" />
                <HeaderMenuLink path="/Smyoon" menuName="성미" />
                <HeaderMenuLink path="/Scr_yj" menuName="연주" />
                <HeaderMenuLink path="/AppS" menuName="용서" />
                <HeaderMenuLink path="/Tae" menuName="태영" />
            </ul>

        </header>
    );
}

export default Header;