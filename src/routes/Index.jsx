import styles from '/src/styles/index.module.scss'

function Index() {
    const categories = [
        {
            title: '',
            description: 'Portraits',
            cover: '/assets/images/portraits.jpg',

        },
        {
            title: '',
            description: 'Streets',
            cover: '/assets/images/streets.jpg',

        },
        {
            title: '',
            description: 'RBDYS Boston \'23',
            cover: '/assets/images/culture.jpg',

        }, {
            title: '',
            description: 'Brigham & Woman\'s Bulletin',
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