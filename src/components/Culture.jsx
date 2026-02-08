// styles
import { useEffect, useState } from 'react';
import { BASE_URL } from '../api/fetch';
import styles from '/src/styles/gridContainer.module.scss';

// functions
import { fetchAPI } from '../api/fetch';
function Culture() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchAPI({ photos, setPhotos })// path to your JSON file
            .then((res) => res)
            .then((data) => {
                console.log(data)
                setPhotos(data);
            })
            .catch((err) => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={styles.culture}>
            <div className={styles.column}>
                {console.log(photos[0])}
                {photos.map((photo, index) => (
                    < img key={index} src={`https://dmychel.github.io/photo-gallery/photography/portraits/${photo.url}.jpg`} alt={photo.url} />
                ))
                }
            </div>
        </div>
    )
}
export { Culture };