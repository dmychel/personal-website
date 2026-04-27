import styles from '/src/styles/about.module.scss';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.imageContainer}>
                <img src="/assets/images/profile.jpg" alt="Error Loading Image" />
            </div>
            <div className={styles.textContainer}>
                <p>I am driven by a deep passion for capturing compelling stories through live-action, candid moments, and portrait photography. With a focus on visual storytelling, I specialize in capturing the grace, dynamism, and profound emotions in human interaction.
                </p>
            </div>
        </div>
    )
}

export { About }