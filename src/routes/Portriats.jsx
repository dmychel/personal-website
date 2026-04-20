// functions
import { GalleryRender } from '../components/GalleryRender';

function Portraits() {
    return GalleryRender("portraits", "portraits.json")
}

export { Portraits };