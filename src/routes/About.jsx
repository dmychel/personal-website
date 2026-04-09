import styles from '/src/styles/about.module.scss';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.imageContainer}>
                <img src="/assets/images/profile.jpg" alt="Error Loading Image" />
            </div>
            <div className={styles.textContainer}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem quas expedita rerum sequi ea temporibus, incidunt aspernatur non quibusdam eveniet laborum! Aliquam totam corrupti recusandae molestiae quo tempore dolores.

                </p>
            </div>
        </div>
    )
}

export { About }