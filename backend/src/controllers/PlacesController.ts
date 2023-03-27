import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import placeView from '../views/places.view';
import * as Yup from 'yup';

import Place from '../models/Place';

export default {
  async index(request: Request, response: Response) {
    const { type } = request.params;

    const placesRepository = getRepository(Place);

    const places = await placesRepository.find({
      relations: ['images']
    });

    if (type !== 'all') {
      const placesType = places.filter((place) => {
        return place.type === type;
      })
  
      return response.json(placeView.renderMany(placesType));
    }

    return response.json(placeView.renderMany(places));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const placesRepository = getRepository(Place);

    const place = await placesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(placeView.render(place));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      type,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      opening_hours,
      open_on_weekends,
    } = request.body;
  
    const placesRepository  = getRepository(Place);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    })
  
    const data = {
      name,
      type,
      latitude,
      longitude,
      about,
      instructions,
      phone,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      phone: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      )
    });

    await schema.validate(data, {abortEarly: false});

    const place = placesRepository.create(data);
  
    await placesRepository.save(place);
  
    return response.status(201).json(place);
  },
}
