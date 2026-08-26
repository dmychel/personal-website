// functions
import { useEffect, useState } from 'react';
import { callFetch } from '../api/callFetch';

// styles 
import styles from '/src/styles/gridContainer.module.scss';

function GalleryRender(title, page, jsonURL) {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        callFetch({ photos, setPhotos }, jsonURL)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.gallery}>
            <h1>{title}</h1>
            <div className={styles.column}>
                {
                    //render photos array
                    photos.map((photo, index) => (
                        < img key={index} src={`https://dmychel.github.io/photo-gallery/photography/${page}/${photo.url}.jpg`} alt={photo.url} />
                    ))
                }
            </div>
        </div>
    )
}

export { GalleryRender }