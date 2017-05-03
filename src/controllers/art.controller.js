/**
 * Deprecated
 */
import models from '../models';

export const defaultPageLimit = 20;

function list (req, res, next) {
  const { keyword, page } = req.query;

  models.Art.findAll({
    include: [
      { model: models.Artist, as: 'artist' },
      { model: models.Image, as: 'thumbImage' },
      { model: models.Image, as: 'images', through: { attributes: [] } }
    ],
    where: {
      $or: ['koreanName', 'englishName', '$artist.koreanName$', '$artist.englishName$']
        .map(column => ({ [column]: { $like: `%${keyword}%` } }))
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    subQuery: false
  }).then(arts => res.json(arts))
    .catch(e => next(e));
}

function get (req, res, next) {
  const { artId } = req.params;

  models.Art.findOne({
    include: [
      { model: models.Artist, as: 'artist' },
      { model: models.Image, as: 'thumbImage' },
      { model: models.Image, as: 'images', through: { attributes: [] } }
    ],
    where: {
      'artId': artId
    },
    subQuery: false
  }).then(art => res.json(art))
    .catch(e => next(e));
}

function listVoiceById (req, res, next) {
  const { artId } = req.params;
  const { page } = req.query;

  models.Voice.findAll({
    include: [
      { model: models.Art, as: 'art', required: true,
        // attributes: { exclude: Object.keys(models.Art.rawAttributes) } },
        attributes: [] },
      { model: models.User, as: 'docent', required: true }
    ],
    where: {
      '$art.artId$': artId
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'avgStarPoint DESC',
    subQuery: false
  }).then(voice => res.json(voice))
    .catch(e => next(e));
}

export default {
  list, get, listVoiceById
};