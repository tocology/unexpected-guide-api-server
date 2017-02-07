import models from '../models';

function list(req, res, next) {
  const { keyword } = req.query

  models.Art.findAll({
    where: {
      $or: ['koreanName', 'englishName', '$Artist.koreanName$', '$Artist.englishName$']
        .map(column => ({ [column]: { $like: `%${keyword}%` } }))
    },
    include: [
      { model: models.Artist, as: 'Artist' },
      { model: models.Image, as: 'ThumbImage' },
      { model: models.Image, as: 'Images' }
    ]
  }).then(arts => res.json(arts))
    .catch(e => next(e));
}

export default {
  list
};