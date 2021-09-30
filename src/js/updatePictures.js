import picturesCardTps from '../tamplase/pictures.hbs'
import refs from '../js/refsPictures'

function updatePictrures(hits) {
    
    const markupAll = picturesCardTps(hits);

    refs.cardContainer.insertAdjacentHTML('beforeend', markupAll);
}
export default updatePictrures;