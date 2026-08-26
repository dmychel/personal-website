import styles from '/src/styles/index.module.scss'

function Index() {
    const categories = [
        {
            title: 'Portraits',
            description: '',
            cover: '/assets/images/portraits.jpg',

        },
        {
            title: 'Streets',
            description: '',
            cover: '/assets/images/streets.jpg',

        },
        {
            title: 'RBDYS Boston \'23',
            description: '',
            cover: '/assets/images/culture.jpg',

        }, {
            title: 'Brigham & Woman\'s Bulletin',
            description: '',
            cover: '/assets/images/bulletin.jpg',
        },
    ]

    return (
        <div className={styles.index}>
            {
                //render categories array
                categories.map((item, index) => (
                    <div className={styles.box} key={index}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <div style={{ backgroundImage: `url(${item.cover})` }} className={styles.catBackground}>
                            <p > {item.description}</p>
                        </div>

                    </div>
                ))
            }

        </div >
    )
}

export { Index }