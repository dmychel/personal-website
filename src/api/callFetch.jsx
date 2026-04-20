import { fetchAPI } from "./fetch";

function callFetch({ setPhotos }, jsonURL) {
    fetchAPI(jsonURL)// path to JSON file
        .then((res) => res)
        .then((data) => {
            console.log(data)
            setPhotos(data);
        })
        .catch((err) => console.error(err));
}

export { callFetch }