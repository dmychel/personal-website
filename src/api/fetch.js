const BASE_URL = 'https://dmychel.github.io/photo-gallery'

export async function call() {
    fetch(`${BASE_URL}/portraits.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }
            return response.json()
        })
        .then(data => {
            console.log(data.photos[0].url)
        })
} 