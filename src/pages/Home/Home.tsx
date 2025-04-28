import styles from "./Home.module.scss"
import { Link } from "react-router-dom";
import { pages } from "../../components/common/Header/Header"

const Home = () => {
    return (
        <section className={styles.home} data-fs-home>
            <h1 className={styles.title}>Especificações:</h1>
            {pages.map((page, index) => (
                <Link className={styles.pageLink} to={page.link} key={index}>
                    <h2 className={styles.pageName}>{page.name}</h2>
                </Link>
            ))}
        </section>
    )
}

export default Home
