// styles
import styles from '/src/styles/menu.module.scss'
// routes
import { Link } from 'react-router-dom'
import { portraitURL, streetsURL, rbdysURL, bulletinURL, aboutURL } from "/src/components/pageLinks";
// functions
import PropTypes from 'prop-types'

function OpenMenu({ setClicked }) {

    function handleClick() {
        return setClicked(false)
    }

    return (
        <div className={styles.openMenu}>
            <ul>
                <li><Link to={portraitURL} onClick={handleClick}>Portraits</Link></li>
                <li><Link to={streetsURL} onClick={handleClick}>Streets</Link></li>
                <li><Link to={rbdysURL} onClick={handleClick}>RBDYS</Link></li>
                <li><Link to={bulletinURL} onClick={handleClick}>BWH Bulletin</Link></li>
                <li><Link to={aboutURL} onClick={handleClick}>About</Link></li>
            </ul>
        </div>
    )
}

OpenMenu.propTypes = {
    setClicked: PropTypes.func,
}


export default OpenMenu