import styles from '/src/styles/menu.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function OpenMenu({ setClicked }) {

    function handleClick() {
        return setClicked(false)
    }

    return (
        <div className={styles.openMenu}>
            <ul>
                <li><Link to='/' onClick={handleClick}>Portraits</Link></li>
                <li><Link to='/photography/streets' onClick={handleClick}>Streets</Link></li>
                <li><Link to='/photography/culture' onClick={handleClick}>Culture</Link></li>
                <li><Link to='/photography/bulletin' onClick={handleClick}>Projects</Link></li>
                <li><Link to='/about' onClick={handleClick}>About</Link></li>
            </ul>
        </div>
    )
}

OpenMenu.propTypes = {
    setClicked: PropTypes.func,
}


export default OpenMenu