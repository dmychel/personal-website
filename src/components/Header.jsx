// routes
import { Link } from "react-router-dom";

// styles
import styles from "/src/styles/header.module.scss";

// functions
import NavDropDown from "./NavDropDown";


function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.headerUL}>
                <li><Link to='/photography/portraits' >Portraits</Link> |</li>
                <li><Link to='/photography/streets'>Streets</Link> |</li>
                <li><Link to='/photography/culture'>RDDYS</Link> |</li>
                <li><Link to='/photography/bulletin'>BWH Bulletin</Link> |</li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <NavDropDown />
        </header>
    )
}

export { Header }