import styles from '/src/styles/index.module.scss'

import image from '/public/assets/images/profile2.jpg'

function Index() {
    const categories = [
        {
            title: 'Portraits',
            description: '',
            cover: image,

        }
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