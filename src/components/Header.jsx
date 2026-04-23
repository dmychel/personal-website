// routes
import { Link } from "react-router-dom";

// styles
import styles from "/src/styles/header.module.scss";


function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Link to='/' >Portraits</Link> |</li>
                <li><Link to='/photography/streets'>Streets</Link> |</li>
                <li><Link to='/photography/culture'>Culture</Link> |</li>
                <li><Link to='/photography/bulletin'>Projects</Link> |</li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </header>
    )
}

export { Header }