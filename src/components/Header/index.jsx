import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.png";
import SearchInput from "../Input/SearchInput";

import style from "./header.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <figure>
                    <img src={Logo} alt="Logo" />
                </figure>
                <h1>Livros Vai na Web</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/donated-books">Livros Doados</Link>
                    </li>
                    <li>
                        <Link to="/donation">Doação</Link>
                    </li>
                </ul>
            </nav>
            <form>
                <SearchInput type="text" placeholder="O que você procura?" />
            </form>
        </header>
    );
};

export default Header;
