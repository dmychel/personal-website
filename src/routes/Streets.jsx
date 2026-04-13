// styles
import { useEffect, useState } from 'react';
import styles from '/src/styles/gridContainer.module.scss';

// functions
import { callFetch } from '../api/callFetch';

function Streets() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        callFetch({ photos, setPhotos }, 'culture.json')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.culture}>
            <h1>The Streets</h1>
            <div className={styles.column}>

                {photos.map((photo, index) => (
                    < img key={index} src={`https://dmychel.github.io/photo-gallery/photography/streets/${photo.url}.jpg`} alt={photo.url} />
                ))
                }
            </div>
        </div>
    )
}
export { Streets };