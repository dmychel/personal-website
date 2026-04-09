import { fetchAPI } from "./fetch";

function callFetch({ photos, setPhotos }, jsonURL) {
    fetchAPI({ photos, setPhotos }, jsonURL)// path to your JSON file
        .then((res) => res)
        .then((data) => {
            console.log(data)
            setPhotos(data);
        })
        .catch((err) => console.error(err));
}

export { callFetch }