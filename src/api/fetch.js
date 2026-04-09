import PropTypes from 'prop-types';
export const BASE_URL = 'https://dmychel.github.io/photo-gallery'

export async function fetchAPI({ photos, setPhotos }) {
    console.log(photos, setPhotos)
    const response = await fetch(`${BASE_URL}/culture.json`);

    if (!response.ok) {
        throw new Error("Netowrk response was not ok");
    }

    const json = await response.json();
    const data = json.photos;
    return data;
}

fetchAPI.propTypes = {
    photos: PropTypes.array,
    setPhotos: PropTypes.func,
}