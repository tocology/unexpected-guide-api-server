import models from '../models';

function list(req, res, next) {
  models.Docent.findAll({
    where: {
      // todo: voice mapping
    },
    include: [
      { model: models.Image, as: 'ProfileImage' }
    ]
  }).then(docents => res.json(docents))
    .catch(e => next(e))
}

export default {
  list
};