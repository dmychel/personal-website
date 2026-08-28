import styles from '/src/styles/index.module.scss'

function Index() {
    const categories = [
        {
            title: '',
            description: 'Portraits',
            cover: '/assets/images/portraits.jpg',
            link: `/photography/portraits`

        },
        {
            title: '',
            description: 'Streets',
            cover: '/assets/images/streets.jpg',
            link: `/photography/streets`
        },
        {
            title: '',
            description: 'RBDYS Boston \'23',
            cover: '/assets/images/culture.jpg',
            link: `/photography/rbdys`
        }, {
            title: '',
            description: 'Brigham & Woman\'s Bulletin',
            cover: '/assets/images/bulletin.jpg',
            link: `/photography/bulletin`
        },
    ]

    return (
        <div className={styles.index}>
            {
                //render categories array
                categories.map((item, index) => (
                    <div className={styles.box} key={index}>
                        {/* <h1 className={styles.title}>{item.title}</h1> */}
                        <div className={styles.hoverBack}>
                            <a href={item.link}></a>
                        </div>
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