import styles from '/src/styles/index.module.scss'

function Index() {
    const categories = [
        {
            title: 'Portraits',
            cover: 'https://placehold.co/600x400'
        }
    ]

    return (
        <div className={styles.index}>
            {
                //render categories array
                categories.map((box, index) => (
                    <div index={index}>
                        <h1>{box.title}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export { Index }