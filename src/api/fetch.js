const BASE_URL = 'https://dmychel.github.io/photo-gallery'

export async function call() {
    const response = await fetch(`${BASE_URL}/portraits.json`);

    if (!response.ok) {
        throw new Error("Netowrk response was not ok");
    }

    const json = await response.json();
    const data = json.photos[0].url;
    return data;

} 