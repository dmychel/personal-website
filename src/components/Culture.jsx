// styles
import styles from '/src/styles/gridContainer.module.scss';

// functions
import { call } from '../api/fetch';

async function init() {
    try {
        const data = await call();
        console.log(data + 'caught')
        console.log()
    } catch (err) {
        console.log(err)
    }
}
init()

function Culture() {
    return (
        <div className={styles.culture}>
            <div className={styles.column}>

            </div>
        </div>
    )
}


export { Culture };