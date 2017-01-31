import models from '../models';

function listDocent(req, res, next) {
  models.Docent.findAll({
    include: [
      // { all: true }
      // { model: models.Image }
      models.Image
    ]
  }).then(docents => res.json(docents))
    .catch(e => next(e))
}

export default {
  listDocent
};