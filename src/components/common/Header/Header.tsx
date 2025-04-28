import { Link } from "react-router-dom";
import styles from './Header.module.scss'

export const pages = [
    {
        name: "Tabela Nutricional",
        link: "/tabela-nutricional"
    },
    {
        name: "Benefícios",
        link: "/beneficios"
    },
    {
        name: "Como Tomar",
        link: "/como-tomar"
    },
    {
        name: "Ingredientes",
        link: "/ingredientes"
    },
    // {
    //     name: "Sobre",
    //     link: "/descricao"
    // },
];

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
