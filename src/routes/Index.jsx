// styles
import styles from '/src/styles/index.module.scss'

// routes
import { Link } from 'react-router-dom'
import { portraitURL, streetsURL, rbdysURL, bulletinURL } from "/src/components/pageLinks.jsx"


function Index() {
    const categories = [
        {
            title: '',
            description: 'Portraits',
            cover: '/assets/images/portraits.jpg',
            link: portraitURL
        },
        {
            title: '',
            description: 'Streets',
            cover: '/assets/images/streets.jpg',
            link: streetsURL
        },
        {
            title: '',
            description: 'RBDYS Boston \'23',
            cover: '/assets/images/culture.jpg',
            link: rbdysURL
        }, {
            title: '',
            description: 'Brigham & Woman\'s Bulletin',
            cover: '/assets/images/bulletin.jpg',
            link: bulletinURL
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
                            <Link to={item.link} />
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