import models from '../models';

export const defaultPageLimit = 20;

function list(req, res, next) {
  const { keyword, page } = req.query

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

export default {
  list
};