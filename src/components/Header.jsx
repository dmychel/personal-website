// routes
import { Link } from "react-router-dom";
import { portraitURL, streetsURL, rbdysURL, bulletinURL, aboutURL } from "./pageLinks";

// styles
import styles from "/src/styles/header.module.scss";

// functions
import NavDropDown from "./NavDropDown";


function Header() {
    return (
        <header className={styles.header}>
            <h1><Link to='/'>Drifter Photography</Link></h1>
            <ul className={styles.headerUL}>
                <li><Link to={portraitURL} >Portraits</Link> |</li>
                <li><Link to={streetsURL}>Streets</Link> |</li>
                <li><Link to={rbdysURL}>rbdys</Link> |</li>
                <li><Link to={bulletinURL}>BWH Bulletin</Link> |</li>
                <li><Link to={aboutURL}>About</Link></li>
            </ul>
            <NavDropDown />
        </header>
    )
}

export { Header }