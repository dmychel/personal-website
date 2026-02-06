import styles from '/src/styles/gridContainer.module.scss'
function Culture() {
    return (
        <div className={styles.culture}>
            <h1>Live the Culture</h1>
            <div className={styles.gridContainer}>
                <img src="/assets/images/1.jpg" alt="photo" />
                <img src="/assets/images/2.jpg" alt="photo" />
                <img src="/assets/images/3.jpg" alt="photo" />
                <img src="/assets/images/4.jpg" alt="photo" />
                <img src="/assets/images/5.jpg" alt="photo" />
            </div>
        </div>
    )
}

export { Culture };