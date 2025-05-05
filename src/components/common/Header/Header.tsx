import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { pages } from "../../../pages/pages";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {pages.map((page, index) => (
                        <li className={styles.listItem} key={index}>
                            <Link className={styles.linkItem} to={page.link}>
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
