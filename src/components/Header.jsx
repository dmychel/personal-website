// routes
import { Link } from "react-router-dom";

// styles
import styles from "/src/styles/header.module.scss";


function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/photography/culture' >Photography</Link> |</li>
                <li><Link to='/'>Traditional Art</Link> |</li>
                <li><Link to='/'>Digital Art</Link> |</li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </header>
    )
}

export { Header }