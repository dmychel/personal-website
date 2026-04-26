import styles from '/src/styles/menu.module.scss';
import PropTypes from 'prop-types';

function ClosedMenu({ setClicked }) {

    function handleClick() {
        return setClicked(true)
    }


    return (
        <div className={styles.dropdown} onClick={handleClick}>
            <div className={styles.button}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

ClosedMenu.propTypes = {
    setClicked: PropTypes.func,
}

export default ClosedMenu