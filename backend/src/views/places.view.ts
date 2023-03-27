import Place from '../models/Place';
import imagesView from './images.view';

export default {
  render(place: Place) {
    return {
      id: place.id,
      name: place.name,
      type: place.type,
      latitude: place.latitude,
      longitude: place.longitude,
      about: place.about,
      instructions: place.instructions,
      phone: place.phone,
      opening_hours: place.opening_hours,
      open_on_weekends: place.open_on_weekends,
      images: imagesView.renderMany(place.images),
    };
  },

  renderMany(places: Place[]) {
    return places.map(place => this.render(place));
  }
};