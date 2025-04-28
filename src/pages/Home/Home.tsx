import "./Home.module.scss"
import { Link } from "react-router-dom";
import { pages } from "../../components/common/Header/Header"

const Home = () => {
    return (
        <section data-fs-home>
            <h1>Especificações:</h1>
            {pages.map((page, index) => (
                <Link to={page.link} key={index}>
                    <h2>{page.name}</h2>
                </Link>
            ))}
        </section>
    )
}

export default Home
